import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import dayjs from 'dayjs';
import { FlatGrid } from 'react-native-super-grid';
import { useTheme } from '../../hooks';
import { GameButton } from '../index';
import { Item } from './Item';
import { styles } from './styles';
import { generateGridArr, getRandomCell, toMinutesAndSeconds } from './utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GridInterface {
  /**
   * Number of rows and columns
   */
  factor: number;
}
const Grid = (props: GridInterface) => {
  const { factor } = props;

  const { darkMode: isDark } = useTheme();

  const [planeDestroyed, setPlaneIsDestroyed] = useState<boolean>();
  const [leaderboard, setLeaderboard] = useState<{ count: string; date: string; time: string }[]>([]);
  const [key, setKey] = useState(0);

  const strikeRef = useRef(0);
  const planeRef = useRef(false);
  const timeRef = useRef(0);

  const getLb = async () => {
    const value = await AsyncStorage.getItem('@leaderboards');
    if (value !== null) {
      setLeaderboard(JSON.parse(value));
    }
  };

  const updateLb = async (lb: { count: string; date: string }[]) => {
    await AsyncStorage.setItem('@leaderboards', JSON.stringify(lb));
  };

  useEffect(() => {
    getLb();
  }, []);

  const setPlane = useCallback(
    (striken?: boolean) => {
      !striken && timeRef.current === 0 && (timeRef.current = dayjs().unix());
      striken &&
        timeRef.current !== 0 &&
        leaderboard.length >= 0 &&
        leaderboard.push({
          count: strikeRef.current.toString(),
          date: dayjs().format('MMMM D, YYYY h:mm A').toString(),
          time: toMinutesAndSeconds(dayjs().unix() - timeRef.current),
        });
      planeRef.current === true && leaderboard.length && updateLb(leaderboard);
      return planeRef.current && setPlaneIsDestroyed(!!striken);
    },
    [planeRef.current],
  );

  return (
    <View style={styles.gridWrapper}>
      <FlatGrid
        itemDimension={30}
        data={generateGridArr(factor, getRandomCell(factor))}
        spacing={3}
        maxItemsPerRow={factor}
        staticDimension={factor * 30 + factor * 6}
        key={key}
        renderItem={({ item }) => (
          <Item
            isPlane={item.isPlane}
            onPress={() => {
              item.isPlane && (planeRef.current = true);
              strikeRef.current = strikeRef.current + 1;
              setPlane(item.isPlane);
            }}
            disabled={planeDestroyed}
          />
        )}
      />

      {planeDestroyed && (
        <Text style={[styles.strikesText, isDark && styles.strikesDark]}>{'Strike counter: ' + strikeRef.current}</Text>
      )}
      {planeDestroyed && (
        <GameButton
          title={'Refresh'}
          onPress={() => {
            planeRef.current = false;
            strikeRef.current = 0;
            timeRef.current = 0;
            setPlaneIsDestroyed(false);
            setKey(key + 1);
          }}
        />
      )}
    </View>
  );
};

export default Grid;
