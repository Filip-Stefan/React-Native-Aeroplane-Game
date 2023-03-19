import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { styles } from './styles';

interface RefreshInterface {
  onPress: () => void;
  title: string;
}

const GameButton = (props: RefreshInterface) => {
  const { onPress, title } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default GameButton;
