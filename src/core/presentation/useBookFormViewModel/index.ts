import {useEffect, useState} from 'react';
import {BookForm, BookFormProps} from '../../../components/organisms/BookForm';

export default function (onChangeForm: BookFormProps['onChangeForm']) {
  const [form, formSet] = useState<BookForm>();

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
