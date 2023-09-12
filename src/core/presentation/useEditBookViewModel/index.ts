import {useState} from 'react';
import {BookForm} from '../../../components/organisms/BookForm';
import {booksUseCase} from '../../../config/coreInjection';

interface EditBookViewModel {
  onSuccessAdd?(): void;
}

export default function ({onSuccessAdd}: EditBookViewModel) {
  const [form, formSet] = useState<BookForm>();

  function addBook() {
    if (form) {
      booksUseCase.addBook({...form, id: new Date().getTime().toString()});
      onSuccessAdd && onSuccessAdd();
    }
  }

  function onChangeForm(form: BookForm) {
    formSet(form);
  }

  return {addBook, onChangeForm};
}
