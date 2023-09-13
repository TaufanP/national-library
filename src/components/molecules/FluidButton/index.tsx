import React from 'react';
import {Text} from 'react-native';
import Button from '../../atoms/Button';
import styles from './styles';

interface FluidButtonProps {
  isDanger?: boolean;
  label: string;
  onPress?(): void;
}

export default function ({isDanger, label, onPress}: FluidButtonProps) {
  return (
    <Button
      onPress={onPress}
      style={[styles.container, isDanger ? styles.danger : styles.basic]}
    >
      <Text
        style={[
          styles.buttonText,
          isDanger ? styles.dangerText : styles.basicText,
        ]}
      >
        {label}
      </Text>
    </Button>
  );
}
