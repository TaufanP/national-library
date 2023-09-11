import {Text, View} from 'react-native';
import Button from '../../atoms/Button';
import React from 'react';
import styles from './styles';

interface CloseButtonProps {
  onPress?(): void;
}

export default function ({onPress}: CloseButtonProps) {
  return (
    <View style={styles.container}>
      <Button onPress={onPress}>
        <Text style={styles.icon}>X</Text>
      </Button>
    </View>
  );
}
