import { Colors } from '../../theme/Variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'lightgrey',
  },
  container: {
    height: 50,
    width: 150,
    backgroundColor: 'darkblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  containerDark: {
    backgroundColor: Colors.primary,
  },
  textDark: {
    color: Colors.textGray800,
  },
});
