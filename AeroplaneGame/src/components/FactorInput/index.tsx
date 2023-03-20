import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import GameButton from '../Button';
import { styles } from './styles';

interface FactorInterface {
  onSubmit: (fact: number) => void;
}

const FactorInput = (props: FactorInterface) => {
  const { onSubmit } = props;

  const [text, onChangeText] = useState('');
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        defaultValue={'5'}
        onEndEditing={() => onSubmit(parseInt(text, 10))}
      />
      <GameButton title={'Change difficulty'} onPress={() => onSubmit(parseInt(text, 10))} smallSize={true} />
    </View>
  );
};

export default FactorInput;
