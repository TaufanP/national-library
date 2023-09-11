import React from 'react';
import {Text} from 'react-native';
import Button from '../../atoms/Button';
import styles from './styles';

interface FluidButtonProps {
  label: string;
  onPress?(): void;
}

export default function ({label, onPress}: FluidButtonProps) {
  return (
    <Button onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>{label}</Text>
    </Button>
  );
}
