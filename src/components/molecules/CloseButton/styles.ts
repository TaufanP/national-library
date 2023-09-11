import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  icon: {fontSize: 16, color: colors.textDark, padding: 8},
});

export default styles;
