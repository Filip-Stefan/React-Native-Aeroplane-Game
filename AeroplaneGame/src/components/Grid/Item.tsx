import { useTheme } from '../../hooks';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ItemInterface {
  onPress: () => void;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
  // eslint-disable-next-line react/require-default-props
  isPlane?: boolean;
}

export const Item = (props: ItemInterface) => {
  const { onPress, disabled, isPlane } = props;
  const { darkMode: isDark } = useTheme();

  const [itemStyle, setItemStyle] = useState([styles.gridLight, isDark && styles.gridDark]);

  const getColor = (reset?: boolean) => {
    if (reset) {
      setItemStyle([styles.gridLight, isDark && styles.gridDark]);
    }
    if (isPlane && !reset) {
      return setItemStyle([styles.gridLight, { backgroundColor: 'red' }]);
    }
    return setItemStyle([styles.gridLight, { backgroundColor: 'black' }]);
  };

  return (
    <TouchableOpacity
      style={itemStyle}
      onPress={() => {
        onPress();
        getColor();
      }}
      disabled={disabled}
    />
  );
};
