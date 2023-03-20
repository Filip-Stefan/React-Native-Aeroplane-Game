import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { styles } from './styles';
import { useTheme } from '../../hooks';

interface RefreshInterface {
  onPress: () => void;
  title: string;
}

const GameButton = (props: RefreshInterface) => {
  const { onPress, title } = props;

  const { darkMode: isDark } = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, isDark && styles.containerDark]}>
      <Text style={[styles.title, isDark && styles.textDark]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default GameButton;
