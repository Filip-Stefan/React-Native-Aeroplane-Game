import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../hooks';
import { styles } from './styles';

const Leaderboard = () => {
  const { darkMode: isDark } = useTheme();

  const navigation = useNavigation();

  const [leaderboard, setLeaderboard] = useState<{ count: string; date: string }[]>();

  const getLb = async () => {
    const value = await AsyncStorage.getItem('@leaderboards');

    if (value !== null) {
      console.log('NU E NULL');
      const parsedArr = JSON.parse(value);
      setLeaderboard(
        parsedArr?.sort(
          (a: { count: string; date: string }, b: { count: string; date: string }) =>
            parseInt(a.count, 10) - parseInt(b.count, 10),
        ),
      );
      return JSON.parse(value);
    }
  };

  useEffect(() => {
    const refresh = navigation.addListener('focus', () => {
      getLb();
      !!leaderboard?.length && leaderboard.sort((a, b) => parseInt(a.count, 10) - parseInt(b.count, 10));
      console.log(leaderboard);
    });

    return refresh;
  }, []);

  const renderList = () =>
    !!leaderboard?.length &&
    leaderboard?.map((item, index) => {
      return (
        <View style={[styles.itemContainer, isDark && styles.darkBorder]}>
          <View style={styles.firstRow}>
            <Text style={[styles.standingText, isDark && styles.darkText]}>{index + 1 + '.'}</Text>
            <Text style={isDark && styles.darkText}>{'Strikes: ' + item.count}</Text>
          </View>
          <Text style={[styles.dateText, isDark && styles.darkText]}>{'Date : ' + item.date}</Text>
        </View>
      );
    });

  return <ScrollView style={styles.wrapper}>{leaderboard?.length && renderList()}</ScrollView>;
};

export default Leaderboard;
