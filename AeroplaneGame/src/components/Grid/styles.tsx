import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Variables';

export const styles = StyleSheet.create({
  gridWrapper: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  gridContainer: { maxWidth: 500, maxHeight: 500 },
  gridLight: {
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: Colors.textGray200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridDark: {
    backgroundColor: Colors.circleButtonBackground,
  },
  planeImage: {
    height: 45,
    width: 45,
  },
  strikesText: {
    fontSize: 20,
    color: Colors.textGray800,
    marginVertical: 10,
  },
  strikesDark: {
    color: Colors.textGray200,
  },
});
