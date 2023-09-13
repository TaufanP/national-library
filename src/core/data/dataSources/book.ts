import {Book} from '../../domain/models/book';

export interface BookDataSource {
  addBook(book: Book): Promise<void>;
  deleteBook(id: Book['id']): Promise<void>;
  getBooks(): Promise<Book[]>;
  updateBook(book: Book): Promise<void>;
}
