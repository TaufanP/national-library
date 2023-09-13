import {Text} from 'react-native';
import styles from './styles';

interface HeadlineProps {
  label: string;
}

export default function ({label}: HeadlineProps) {
  return <Text style={styles.headlineText}>{label}</Text>;
}
