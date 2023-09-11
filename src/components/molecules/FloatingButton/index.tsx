import React from 'react';
import {Text} from 'react-native';
import Button from '../../atoms/Button';
import styles from './styles';

interface FloatingButtonProps {
  onPress?(): void;
}

export default function ({onPress}: FloatingButtonProps) {
  return (
    <Button onPress={onPress} style={styles.container}>
      <Text style={styles.icon}>+</Text>
    </Button>
  );
}
