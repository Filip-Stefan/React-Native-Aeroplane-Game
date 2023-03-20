import React from 'react';
import { View } from 'react-native';
import { Leaderboard } from '../../components';
import { styles } from '../styles';

const LeaderboardScreen = () => {
  return (
    <View style={styles.lbWrapper}>
      <Leaderboard />
    </View>
  );
};

export default LeaderboardScreen;
