import {View} from 'react-native';
import TextField from '../../atoms/TextField';
import {useEffect, useState} from 'react';

export interface BookForm {
  title: string;
  description: string;
  author: string;
  publisher: string;
  cover: string;
}

interface BookFormProps {
  onChangeForm(form: BookForm): void;
}

export default function ({onChangeForm}: BookFormProps) {
  const [form, formSet] = useState<BookForm>();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (form) onChangeForm(form);
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [form]);

  return (
    <View style={{gap: 16}}>
      <TextField
        placeholder="Title"
        onChangeText={onChangeText('title')}
        value={form?.['title']}
      />
      <TextField
        placeholder="Description"
        onChangeText={onChangeText('description')}
        value={form?.['description']}
        multiline
        maxLength={150}
      />
      <TextField
        placeholder="Author"
        onChangeText={onChangeText('author')}
        value={form?.['author']}
      />
      <TextField
        placeholder="Publisher"
        onChangeText={onChangeText('publisher')}
        value={form?.['publisher']}
      />
      <TextField
        placeholder="Cover"
        onChangeText={onChangeText('cover')}
        value={form?.['cover']}
      />
    </View>
  );

  function onChangeText(type: keyof BookForm) {
    return function (text: string) {
      formSet(current => {
        const copy = JSON.parse(JSON.stringify(current || {}));
        copy[type] = text;
        return copy;
      });
    };
  }
}
