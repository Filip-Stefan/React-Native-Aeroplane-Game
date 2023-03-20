import { StyleSheet } from 'react-native';
import { Colors } from '../theme/Variables';

export const styles = StyleSheet.create({
  /* Main */
  wrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.transparent,
  },
  switch: {
    alignSelf: 'center',
  },
  /* Leaderboard */
  lbWrapper: {
    height: '100%',
    width: '100%',
  },
  /* Startup */
  startImage: {
    height: 300,
    width: 300,
  },
});
