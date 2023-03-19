import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import plane from '../../resources/images/plane.png';
import { styles } from './styles';

const Headline = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>FIND THE PLANE</Text>
      <FastImage source={plane} resizeMode={'contain'} style={styles.planeImage} />
    </View>
  );
};

export default Headline;
