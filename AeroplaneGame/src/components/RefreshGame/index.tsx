import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

interface RefreshInterface {
  onPress: () => void;
}

const RefreshButton = (props: RefreshInterface) => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={{ height: 50, width: 150, backgroundColor: 'blue' }}>
      <Text>Refresh</Text>
    </TouchableOpacity>
  );
};
export default RefreshButton;
