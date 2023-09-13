import {useState} from 'react';
import {BookForm} from '../../../components/organisms/BookForm';
import {BooksCase} from '../../domain/useCases/book';

interface EditBookViewModel {
  onSuccess?(): void;
  booksCase: BooksCase;
}

export default function ({onSuccess, booksCase}: EditBookViewModel) {
  const [form, formSet] = useState<BookForm>();

  function addBook() {
    if (form) {
      booksCase.addBook({id: new Date().getTime().toString(), ...form});
      onPostAction();
    }
  }

  function deleteBook() {
    if (form?.id) {
      booksCase.deleteBook(form['id']);
      onPostAction();
    }
  }

  function onChangeForm(form: BookForm) {
    formSet(form);
  }

  function onPostAction() {
    onSuccess && onSuccess();
  }

  function updateBook() {
    if (form) {
      booksCase.updateBook({...form, id: form?.id || ''});
      onPostAction();
    }
  }

  return {addBook, deleteBook, onChangeForm, updateBook};
}
