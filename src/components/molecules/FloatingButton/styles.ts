import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 48,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    bottom: 24,
    right: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {fontSize: 24, color: colors.textLight},
});

export default styles;
