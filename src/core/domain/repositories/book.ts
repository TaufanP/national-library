import {Book} from '../models/book';

export interface BookRepository {
  addBook(book: Book): Promise<void>;
  getBooks(): Promise<Book[]>;
}
