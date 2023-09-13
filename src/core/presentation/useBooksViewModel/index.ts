import {useEffect, useState} from 'react';
import {Book} from '../../domain/models/book';
import {BooksCase} from '../../domain/useCases/book';

export default function (booksCase: BooksCase) {
  const [books, booksSet] = useState<Book[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const result = await booksCase.getBooks();
    booksSet(result);
  }

  return {books};
}
