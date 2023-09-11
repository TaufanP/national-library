import {BookRepository} from '../../repositories/book';

export default function (repository: BookRepository) {
  return () => repository.getBooks();
}
