import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Variables';

export const styles = StyleSheet.create({
  gridWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  gridContainer: { maxHeight: 500 },
  gridLight: {
    width: '100%',
    aspectRatio: 1,
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
