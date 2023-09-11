/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';

import getBooksCase from './src/core/domain/useCases/book/getBooks';
import {BookRepositoryImp} from './src/core/data/repositoriesImp/book';
import {BookDataSourceImp} from './src/core/data/dataSourcesImp/book';

export default function () {
  const bookDataSource = new BookDataSourceImp();
  const bookRepository = new BookRepositoryImp(bookDataSource);
  const getBooksUseCase = getBooksCase(bookRepository);

  async function getBooks() {
    const result = await getBooksUseCase();
    console.log(result);
  }

  useEffect(() => {
    getBooks();
  }, []);

  return <View></View>;
}
