import {useEffect, useState} from 'react';
import {bookUseCase} from '../../../config/coreInjection';
import {Book} from '../../domain/models/book';

export default function () {
  const [books, booksSet] = useState<Book[]>([]);
  const [isEditing, isEditingSet] = useState<boolean>(false);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const result = await bookUseCase.getBooks();
    booksSet(result);
  }

  function toggleEditing() {
    isEditingSet(c => !c);
  }

  return {books, isEditing, toggleEditing};
}
