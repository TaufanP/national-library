import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  authorSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorText: {color: colors.textDark, fontSize: 12},
  contentContainer: {
    flex: 1,
    gap: 8,
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingVertical: 2,
  },
  descriptionText: {color: colors.textDark},
  image: {
    width: 80,
    height: undefined,
    aspectRatio: 2 / 3,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  publisherText: {color: colors.textDark, fontSize: 9},
  titleText: {fontSize: 16, fontWeight: 'bold', color: colors.textDark},
  wrapper: {flexDirection: 'row', gap: 16},
});

export default styles;
