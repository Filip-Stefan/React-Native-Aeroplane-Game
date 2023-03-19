import { StyleSheet } from 'react-native';

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
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridDark: {
    backgroundColor: 'blue',
  },
  planeImage: {
    height: 45,
    width: 45,
  },
});
