import axios from 'axios';
import {Book} from '../../domain/models/book';
import {BookDataSource} from '../dataSources/book';

export class BookDataSourceImp implements BookDataSource {
  async addBook(book: Book): Promise<void> {
    await axios.post('http://192.168.1.16:3005/books', {
      author: book.author || 'John Doe',
      cover: book.cover || 'https://picsum.photos/200',
      description:
        book.description ||
        'Lorem ipsum dolor sit amet. Lopist de sumpi sit metasis melore lorem ispum dolor.',
      publisher: book.publisher || 'Abc Inc.',
      title: book.title || 'Book Title',
    });
  }

  async getBooks(): Promise<Book[]> {
    const response = await axios.get('http://192.168.1.16:3005/books');

    return response.data;
  }
}
