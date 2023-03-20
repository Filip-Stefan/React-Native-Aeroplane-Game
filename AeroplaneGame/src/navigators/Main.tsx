import React from 'react';
import { Game, LeaderboardScreen } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';
import plane from '../resources/images/plane.png';
import leaderboard from '../resources/images/leaderboard.png';
import { styles } from './styles';
import { useTheme } from '../hooks';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const { darkMode: isDark } = useTheme();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
      <Tab.Screen
        name="Play"
        component={Game}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <FastImage
              source={plane}
              style={styles.icon}
              resizeMode={'contain'}
              tintColor={isDark ? styles.iconDark.color : styles.icon.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <FastImage
              source={leaderboard}
              style={styles.icon}
              tintColor={isDark ? styles.iconDark.color : styles.icon.color}
              resizeMode={'contain'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
