import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity, ScrollView, Image, Alert, Pressable } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';
import RefreshButton from '../RefreshGame';

interface GridInterface {
  /**
   * Number of rows and columns
   */
  factor: number;
}

const Grid = (props: GridInterface) => {
  const { factor } = props;

  const { darkMode: isDark } = useTheme();
  const dispatch = useDispatch();

  const [planeDestroyed, setPlaneIsDestroyed] = useState(false);
  const [strikeCounter, setStrikeCounter] = useState<number>(0);

  let counter = 0;

  const gridArr: { c: number; r: number; isPlane?: boolean | undefined }[] = [];

  const randomCell = {
    column: Math.floor(Math.random() * (factor - 1)) + 1,
    row: Math.floor(Math.random() * (factor - 1)) + 1,
  };

  const generateGridArr = () => {
    console.log('RANDOM : ' + randomCell.column + ' ' + randomCell.row);
    for (let i = factor; i > 0; i--) {
      for (let j = factor; j > 0; j--) {
        if (i === randomCell.column && j === randomCell.row) {
          gridArr.unshift({ r: j, c: i, isPlane: true });
        } else {
          gridArr.unshift({ r: j, c: i });
        }
      }
    }
    console.log(gridArr);
    return gridArr;
  };
  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  return (
    <View>
      <FlatGrid
        itemDimension={50}
        data={generateGridArr()}
        spacing={5}
        adjustGridToStyles={true}
        style={{ maxWidth: 500, maxHeight: 500 }}
        maxItemsPerRow={factor}
        staticDimension={factor * 50 + factor * 10}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={
              isDark
                ? {
                    minHeight: 50,
                    borderRadius: 10,
                    backgroundColor: 'darkgrey',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
                : {
                    minHeight: 50,
                    borderRadius: 10,
                    backgroundColor: 'blue',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
            }
            onPress={() => {
              console.log({ column: item.c, row: item.r });
              item.isPlane && setPlaneIsDestroyed(true);
              !item.isPlane && counter++;
              item.isPlane && setStrikeCounter(counter);
              console.log(counter);
              item.isPlane && console.log('destroyed');
            }}
          >
            <Text>{item.c + '' + item.r}</Text>
          </TouchableOpacity>
        )}
      />
      {planeDestroyed && <Text>{'Strike counter: ' + strikeCounter}</Text>}
      <RefreshButton
        onPress={() => {
          console.log('refresh');
          setPlaneIsDestroyed(false);
          counter = 0;
        }}
      />
    </View>
  );
};

export default Grid;
