import React from 'react';
import {View, ViewProps} from 'react-native';
import styles from './styles';

export default function ({children, ...props}: ViewProps) {
  return (
    <View {...props} style={styles.container}>
      {children}
    </View>
  );
}
