import { Colors } from '../../theme/Variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'lightgrey',
  },
  titleSmall: {
    fontSize: 14,
  },
  container: {
    height: 50,
    backgroundColor: 'darkblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  small: {
    height: 35,
    paddingHorizontal: 5,
  },
  containerDark: {
    backgroundColor: Colors.primary,
  },
  textDark: {
    color: Colors.textGray800,
  },
});
