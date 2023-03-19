import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import GameButton from '../Button';
import { styles } from './styles';
import plane from '../../resources/images/plane.png';
import FastImage from 'react-native-fast-image';
import { generateGridArr, getRandomCell } from './utils';

interface GridInterface {
  /**
   * Number of rows and columns
   */
  factor: number;
}
const Grid = (props: GridInterface) => {
  const { factor } = props;

  const { darkMode: isDark } = useTheme();
  // const dispatch = useDispatch();

  const [planeDestroyed, setPlaneIsDestroyed] = useState(false);

  const strikeRef = useRef(0);
  const planeRef = useRef(false);

  // const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
  //   dispatch(changeTheme({ theme, darkMode }));
  // };

  const setPlane = useCallback(
    (striken?: boolean) => {
      planeRef.current === true && console.log('plane set');

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
              item.isPlane && console.log('destroyed');
              setPlane(item.isPlane);
              console.log('STATE: ' + planeDestroyed);
              console.log('REF: ' + planeRef.current);
            }}
          />
        )}
      />
      {planeDestroyed && <Text>{'Strike counter: ' + strikeRef.current}</Text>}
      {planeDestroyed && (
        <GameButton
          title={'Refresh'}
          onPress={() => {
            console.log('refresh');
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
