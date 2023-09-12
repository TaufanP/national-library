import {Book} from '../../domain/models/book';
import {BookRepository} from '../../domain/repositories/book';
import {BookDataSourceImp} from '../dataSourcesImp/book';

export class BookRepositoryImp implements BookRepository {
  constructor(private dataSource: BookDataSourceImp) {}

  async addBook(book: Book): Promise<void> {
    return await this.dataSource.addBook(book);
  }

  async getBooks(): Promise<Book[]> {
    return await this.dataSource.getBooks();
  }
}
