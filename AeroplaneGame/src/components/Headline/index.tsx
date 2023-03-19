import { useTheme } from '../../hooks';
import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import plane from '../../resources/images/plane.png';
import { styles } from './styles';

const Headline = () => {
  const { darkMode: isDark } = useTheme();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.text, isDark && styles.textDark]}>FIND THE PLANE</Text>
      <FastImage
        source={plane}
        resizeMode={'contain'}
        style={styles.planeImage}
        tintColor={isDark ? styles.textDark.color : styles.text.color}
      />
    </View>
  );
};

export default Headline;
