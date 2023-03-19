import React, { useEffect } from 'react';
import { View, Alert, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../hooks';
import { useLazyFetchOneQuery } from '../../services/modules/users';
import { changeTheme, ThemeState } from '../../store/theme';
import { Grid, Headline } from '../../components';
import i18next from 'i18next';
import { createBrotliDecompress } from 'zlib';

const GameScreen = () => {
  const { Colors, Common, Fonts, Gutters, Layout, Images, darkMode: isDark } = useTheme();
  const dispatch = useDispatch();

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: Colors.transparent }}>
      <Headline />
      <Grid factor={3} />
      <Switch
        trackColor={{ false: Colors.textGray800, true: Colors.textGray800 }}
        thumbColor={!isDark ? Colors.white : Colors.textGray200}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => onChangeTheme({ darkMode: !isDark })}
        value={!isDark}
        style={{ margin: 10 }}
      />
    </View>
  );
};

export default GameScreen;
