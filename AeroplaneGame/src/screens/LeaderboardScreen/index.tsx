import React, { useEffect } from 'react';
import { View, Alert, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../hooks';
import { useLazyFetchOneQuery } from '../../services/modules/users';
import { changeTheme, ThemeState } from '../../store/theme';
import { Grid, Headline, Leaderboard } from '../../components';
import i18next from 'i18next';
import { createBrotliDecompress } from 'zlib';

const LeaderboardScreen = () => {
  const { Colors, Common, Fonts, Gutters, Layout, Images, darkMode: isDark } = useTheme();
  const dispatch = useDispatch();

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: Colors.transparent }}>
      <Leaderboard />
    </View>
  );
};

export default LeaderboardScreen;
