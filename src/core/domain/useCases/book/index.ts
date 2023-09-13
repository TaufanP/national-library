import {Book} from '../../models/book';
import {BookRepository} from '../../repositories/book';

export default function (repository: BookRepository) {
  return {
    addBook: (book: Book) => repository.addBook(book),
    getBooks: () => repository.getBooks(),
    updateBook: (book: Book) => repository.updateBook(book),
  };
}
