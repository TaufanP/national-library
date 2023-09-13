import {ApiHelper} from '../../../config/apiClient';
import {Book} from '../../domain/models/book';
import {BookDataSource} from '../dataSources/book';

export class BookDataSourceImp implements BookDataSource {
  constructor(private apiInstance: ApiHelper) {}

  async addBook(book: Book): Promise<void> {
    await this.apiInstance.post('/books', {
      id: book.id,
      author: book.author || 'John Doe',
      cover: book.cover || 'https://picsum.photos/200',
      description:
        book.description ||
        'Lorem ipsum dolor sit amet. Lopist de sumpi sit metasis melore lorem ispum dolor.',
      publisher: book.publisher || 'Abc Inc.',
      title: book.title || 'Book Title',
    });
  }

  async deleteBook(id: string): Promise<void> {
    await this.apiInstance.delete(`/books/${id}`);
  }

  async getBooks(): Promise<Book[]> {
    const response = await this.apiInstance.get('/books');

    return response.data;
  }

  async updateBook(book: Book): Promise<void> {
    await this.apiInstance.patch(`/books/${book.id}`, book);
  }
}
