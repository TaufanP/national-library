import {Book} from '../models/book';

export interface BookRepository {
  addBook(book: Book): Promise<void>;
  deleteBook(id: Book['id']): Promise<void>;
  getBooks(): Promise<Book[]>;
  updateBook(book: Book): Promise<void>;
}
