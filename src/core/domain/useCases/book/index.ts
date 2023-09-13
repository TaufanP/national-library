import {Book} from '../../models/book';
import {BookRepository} from '../../repositories/book';

function booksCase(repository: BookRepository) {
  return {
    addBook: (book: Book) => repository.addBook(book),
    deleteBook: (id: Book['id']) => repository.deleteBook(id),
    getBooks: () => repository.getBooks(),
    updateBook: (book: Book) => repository.updateBook(book),
  };
}

export type BooksCase = ReturnType<typeof booksCase>;

export default booksCase;
