import { useTheme } from '../../hooks';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import GameButton from '../Button';
import { styles } from './styles';

interface FactorInterface {
  onSubmit: (fact: number) => void;
}

const FactorInput = (props: FactorInterface) => {
  const { onSubmit } = props;

  const { darkMode: isDark } = useTheme();

  const [text, onChangeText] = useState('');

  const parsedText = parseInt(text, 10);
  const diffCondition = parsedText >= 5 && parsedText <= 10;
  console.log(text);
  // const renderWarning = () => {
  //   const getText = () => {
  //     if (parsedText < 5) {
  //       return 'Difficulty level cannot be lower than 5!';
  //     } else if (parsedText > 10) {
  //       return 'Difficulty level cannot be higher than 10!';
  //     }
  //   };
  //   return <Text style={styles.warning}>{getText()} </Text>;
  // };

  return (
    <>
      <View style={styles.wrapper}>
        <TextInput
          style={[styles.input, isDark && styles.inputDark]}
          onChangeText={onChangeText}
          value={text}
          defaultValue={'5'}
          onEndEditing={() => {
            onSubmit(parseInt(text, 10));
            console.log('input edited');
          }}
        />
        <GameButton
          title={'Change difficulty'}
          onPress={() => diffCondition && onSubmit(parsedText)}
          smallSize={true}
        />
      </View>
      {/* {renderWarning()} */}
    </>
  );
};

export default FactorInput;
