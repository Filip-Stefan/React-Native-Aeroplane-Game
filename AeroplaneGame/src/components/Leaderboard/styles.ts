import { Colors } from '../../theme/Variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: { height: '100%', width: '100%' },
  itemContainer: {
    width: '90%',
    height: 70,
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
  },
  standingText: {
    fontWeight: '600',
    width: '10%',
  },
  countText: {
    width: '10%',
  },
  dateText: {
    width: '80%',
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    marginBottom: 10,
  },
  darkText: { color: Colors.textGray200 },
  darkBorder: { borderColor: Colors.textGray200 },
});
