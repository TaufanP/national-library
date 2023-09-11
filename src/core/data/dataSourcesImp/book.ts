import axios from 'axios';
import {Book} from '../../domain/models/book';
import {BookDataSource} from '../dataSources/book';

export class BookDataSourceImp implements BookDataSource {
  async getBooks(): Promise<Book[]> {
    // const response = await fetch('http://192.168.1.16:3005/books', {
    //   method: 'GET',
    // });

    // const result = await response.json();

    const response = await axios.get('http://192.168.1.16:3005/books');

    return response.data;
  }
}
