import {useState} from 'react';
import {Book} from '../../domain/models/book';

export default function () {
  const [isEditing, isEditingSet] = useState<boolean>(false);
  const [selectedBook, selectedBookSet] = useState<Book>();

  function toggleEditing(book?: Book) {
    return function () {
      if (book) selectedBookSet(book);
      if (isEditing) selectedBookSet(undefined);
      isEditingSet(c => !c);
    };
  }

  return {isEditing, toggleEditing, selectedBook};
}
