import {useState} from 'react';
import {BookForm} from '../../../components/organisms/BookForm';

export default function () {
  const [form, formSet] = useState<BookForm>();

  function addBook() {
    console.log(form);
  }

  function onChangeForm(form: BookForm) {
    formSet(form);
  }

  return {addBook, onChangeForm};
}
