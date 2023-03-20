import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';
import { FlatGrid } from 'react-native-super-grid';
import { useTheme } from '../../hooks';
import GameButton from '../Button';
import { styles } from './styles';
import { generateGridArr, getRandomCell } from './utils';
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

  const [planeDestroyed, setPlaneIsDestroyed] = useState(false);
  const [leaderboard, setLeaderboard] = useState<{ count: string; date: string }[]>([]);

  const strikeRef = useRef(0);
  const planeRef = useRef(false);
  const timeRef = useRef(0);

  const getLb = async () => {
    const value = await AsyncStorage.getItem('@leaderboards');
    if (value !== null) {
      setLeaderboard(JSON.parse(value));
      return JSON.parse(value);
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
      strikeRef.current === 0 && (timeRef.current = dayjs().unix());
      planeRef.current === true &&
        leaderboard.length >= 0 &&
        leaderboard.push({ count: strikeRef.current.toString(), date: dayjs().toString() });
      planeRef.current === true && leaderboard.length && updateLb(leaderboard);
      return planeRef.current && setPlaneIsDestroyed(!!striken);
    },
    [planeRef.current],
  );

  return (
    <View style={styles.gridWrapper}>
      <FlatGrid
        itemDimension={50}
        data={generateGridArr(factor, getRandomCell(factor))}
        spacing={5}
        adjustGridToStyles={true}
        style={styles.gridContainer}
        maxItemsPerRow={factor}
        staticDimension={factor * 50 + factor * 10}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.gridLight, isDark && styles.gridDark]}
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
            setPlaneIsDestroyed(false);
          }}
        />
      )}
    </View>
  );
};

export default Grid;
