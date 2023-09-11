/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';
import {BookRepositoryImp} from './src/core/data/repositoriesImp/book';
import {BookDataSourceImp} from './src/core/data/dataSourcesImp/book';
import booksCase from './src/core/domain/useCases/book/';

export default function () {
  const bookDataSource = new BookDataSourceImp();
  const bookRepository = new BookRepositoryImp(bookDataSource);
  const bookUseCase = booksCase(bookRepository);

  async function getBooks() {
    const result = await bookUseCase.getBooks();
    console.log(result);
  }

  useEffect(() => {
    getBooks();
  }, []);

  return <View></View>;
}
