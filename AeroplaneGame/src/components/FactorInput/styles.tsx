import { Colors } from '../../theme/Variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 50,
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
  },
  inputDark: {
    borderColor: Colors.textGray200,
    color: Colors.textGray200,
  },
  warning: {
    color: 'red',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
