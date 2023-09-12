import {Book} from '../../domain/models/book';

export interface BookDataSource {
  addBook(book: Book): Promise<void>;
  getBooks(): Promise<Book[]>;
}
