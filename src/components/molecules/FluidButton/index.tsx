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
  const buttonStyle = [
    styles.container,
    isDanger ? styles.danger : styles.basic,
  ];

  const textStyle = [
    styles.buttonText,
    isDanger ? styles.dangerText : styles.basicText,
  ];

  return (
    <Button onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{label}</Text>
    </Button>
  );
}
