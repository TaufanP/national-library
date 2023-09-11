import {useEffect, useState} from 'react';
import {bookUseCase} from '../../../config/coreInjection';
import {Book} from '../../domain/models/book';

export default function () {
  const [books, booksSet] = useState<Book[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const result = await bookUseCase.getBooks();
    booksSet(result);
  }

  return {books};
}
