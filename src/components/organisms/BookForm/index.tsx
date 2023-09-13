import {View} from 'react-native';
import {Book} from '../../../core/domain/models/book';
import useBookFormViewModel from '../../../core/presentation/useBookFormViewModel';
import TextField from '../../atoms/TextField';

export interface BookForm {
  id?: string;
  title: string;
  description: string;
  author: string;
  publisher: string;
  cover: string;
}

export interface BookFormProps {
  book?: Book;
  onChangeForm(form: BookForm): void;
}

export default function ({book, onChangeForm}: BookFormProps) {
  const {form, onChangeText} = useBookFormViewModel({onChangeForm, book});

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
}
