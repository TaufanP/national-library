import {Book} from '../../domain/models/book';

export interface BookDataSource {
  getBooks(): Promise<Book[]>;
}
