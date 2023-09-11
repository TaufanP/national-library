import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export default function ({children, ...props}: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props} activeOpacity={0.9}>
      {children}
    </TouchableOpacity>
  );
}
