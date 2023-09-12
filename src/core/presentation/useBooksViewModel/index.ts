import {useEffect, useState} from 'react';
import {booksUseCase} from '../../../config/coreInjection';
import {Book} from '../../domain/models/book';

export default function () {
  const [books, booksSet] = useState<Book[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const result = await booksUseCase.getBooks();
    booksSet(result);
  }

  return {books};
}
