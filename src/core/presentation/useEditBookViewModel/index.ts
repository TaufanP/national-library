import {useState} from 'react';
import {BookForm} from '../../../components/organisms/BookForm';
import {booksUseCase} from '../../../config/coreInjection';

interface EditBookViewModel {
  onSuccess?(): void;
}

export default function ({onSuccess}: EditBookViewModel) {
  const [form, formSet] = useState<BookForm>();

  function addBook() {
    if (form) {
      booksUseCase.addBook({...form, id: new Date().getTime().toString()});
      onPostAction();
    }
  }

  function onChangeForm(form: BookForm) {
    formSet(form);
  }

  function onPostAction() {
    onSuccess && onSuccess();
  }

  return {addBook, onChangeForm};
}
