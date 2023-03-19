import React, { useEffect } from 'react';
import { View, Text, Alert, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../hooks';
import { useLazyFetchOneQuery } from '../../services/modules/users';
import { changeTheme, ThemeState } from '../../store/theme';
import { GameButton, Grid, Headline } from '../../components';
import plane from '../../resources/images/plane.png';
import i18next from 'i18next';
import FastImage from 'react-native-fast-image';

const GameScreen = () => {
  const { Common, Fonts, Gutters, Layout, Images, darkMode: isDark } = useTheme();
  const dispatch = useDispatch();

  const [fetchOne, { data, isSuccess, isLoading, isFetching }] = useLazyFetchOneQuery();

  useEffect(() => {
    if (isSuccess && data?.name) {
      Alert.alert(t('example:helloUser', { name: data.name }));
    }
  }, [isSuccess, data]);

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: isDark ? 'midnightblue' : 'white' }}>
      <Headline />
      <Grid factor={3} />
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={!isDark ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => onChangeTheme({ darkMode: !isDark })}
        value={!isDark}
      />
    </View>
  );
};

export default GameScreen;
