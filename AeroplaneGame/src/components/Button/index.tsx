import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { styles } from './styles';
import { useTheme } from '../../hooks';

interface RefreshInterface {
  onPress: () => void;
  title: string;
  // eslint-disable-next-line react/require-default-props
  smallSize?: boolean;
}

const GameButton = (props: RefreshInterface) => {
  const { onPress, title, smallSize } = props;

  const { darkMode: isDark } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, smallSize && styles.small, isDark && styles.containerDark]}
    >
      <Text style={[styles.title, smallSize && styles.titleSmall, isDark && styles.textDark]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default GameButton;
