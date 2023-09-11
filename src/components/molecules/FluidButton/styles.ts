import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  buttonText: {color: colors.textLight, fontSize: 16, fontWeight: 'bold'},
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    paddingVertical: 16,
    width: '100%',
  },
});

export default styles;
