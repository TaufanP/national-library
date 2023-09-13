import {Book} from '../../domain/models/book';
import {BookRepository} from '../../domain/repositories/book';
import {BookDataSource} from '../dataSources/book';

export class BookRepositoryImp implements BookRepository {
  constructor(private dataSource: BookDataSource) {}

  async addBook(book: Book): Promise<void> {
    return await this.dataSource.addBook(book);
  }

  async deleteBook(id: string): Promise<void> {
    return await this.dataSource.deleteBook(id);
  }

  async getBooks(): Promise<Book[]> {
    return await this.dataSource.getBooks();
  }

  async updateBook(book: Book): Promise<void> {
    return await this.dataSource.updateBook(book);
  }
}
