import React from 'react';
import { Game, LeaderboardScreen } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import plane from '../resources/images/plane.png';
import leaderboard from '../resources/images/leaderboard.png';
import { styles } from './styles';
import { useTheme } from '../hooks';
import { Image } from 'react-native';

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
            <Image source={plane} style={[styles.icon, isDark && styles.iconDark]} resizeMode={'contain'} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <Image source={leaderboard} style={[styles.icon, isDark && styles.iconDark]} resizeMode={'contain'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
