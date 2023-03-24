import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import { Grid, Headline, FactorInput } from '../../components';
import { styles } from '../styles';

const GameScreen = () => {
  const { Colors, darkMode: isDark } = useTheme();
  const dispatch = useDispatch();

  const [factor, setFactor] = useState(5);
  const [nrPlanes, setNrPlanes] = useState(1);

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };
  console.log('MAIN: ' + nrPlanes);
  return (
    <View style={styles.wrapper}>
      <Headline />
      <FactorInput onSubmit={setFactor} />
      <FactorInput onSubmit={setNrPlanes} />
      <Grid factor={factor} nrOfPlanes={nrPlanes} />
      <Switch
        trackColor={{ false: Colors.textGray800, true: Colors.textGray800 }}
        thumbColor={!isDark ? Colors.white : Colors.textGray200}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => onChangeTheme({ darkMode: !isDark })}
        value={!isDark}
        style={styles.switch}
      />
    </View>
  );
};

export default GameScreen;
