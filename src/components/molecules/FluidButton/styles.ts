import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  basic: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  basicText: {
    color: colors.textLight,
  },

  buttonText: {fontSize: 16, fontWeight: 'bold'},

  container: {
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    paddingVertical: 16,
    width: '100%',
    borderWidth: 1,
  },

  danger: {
    borderColor: colors.danger,
    backgroundColor: colors.white,
  },
  dangerText: {
    color: colors.danger,
  },
});

export default styles;
