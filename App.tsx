/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';
import useBooksViewModel from './src/core/presentation/useBooksViewModel';

export default function () {
  const {books} = useBooksViewModel();

  useEffect(() => {
    console.log(books);
  }, [books]);

  return <View></View>;
}
