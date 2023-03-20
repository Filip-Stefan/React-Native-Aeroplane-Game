import React from 'react';
import { Game, LeaderboardScreen } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';
import plane from '../resources/images/plane.png';
import leaderboard from '../resources/images/leaderboard.png';

const Tab = createBottomTabNavigator();
// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
      <Tab.Screen
        name="Play"
        component={Game}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <FastImage source={plane} style={{ height: 30, width: 30 }} resizeMode={'contain'} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <FastImage source={leaderboard} style={{ height: 30, width: 30 }} resizeMode={'contain'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
