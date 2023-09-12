import {TextInput, TextInputProps} from 'react-native';
import styles from './styles';

interface TextFieldProps extends TextInputProps {}

export default function ({style, maxLength, ...props}: TextFieldProps) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={'#888'}
      maxLength={maxLength || 30}
      {...props}
    />
  );
}
