import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Variables';

export const styles = StyleSheet.create({
  planeImage: {
    height: 70,
    width: 70,
    marginLeft: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.textGray400,
  },
  textDark: {
    color: Colors.error,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
