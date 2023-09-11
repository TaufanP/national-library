import {Book} from '../models/book';

export interface BookRepository {
  getBooks(): Promise<Book[]>;
}
