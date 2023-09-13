import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.white,
    bottom: 16,
    flex: 1,
    padding: 16,
    position: 'absolute',
    width: '100%',
    gap: 16,
  },

  scroll: {paddingHorizontal: 16},
});

export default styles;
