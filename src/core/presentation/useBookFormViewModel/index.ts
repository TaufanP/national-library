import {useEffect, useState} from 'react';
import {BookForm, BookFormProps} from '../../../components/organisms/BookForm';
import {Book} from '../../domain/models/book';

interface BookFormViewModel {
  book?: Book;
  onChangeForm: BookFormProps['onChangeForm'];
}

export default function ({book, onChangeForm}: BookFormViewModel) {
  const [form, formSet] = useState<BookForm | undefined>(book);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (form) onChangeForm(form);
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [form]);

  function onChangeText(type: keyof BookForm) {
    return function (text: string) {
      formSet(current => {
        const copy = JSON.parse(JSON.stringify(current || {}));
        copy[type] = text;
        return copy;
      });
    };
  }

  return {onChangeText, form};
}
