import {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Screen from '../../atoms/Screen';
import TextField from '../../atoms/TextField';
import CloseButton from '../../molecules/CloseButton';
import FluidButton from '../../molecules/FluidButton';
import styles from './styles';

interface EditBookProps {
  toggleEditing(): void;
}

interface BookForm {
  title: string;
  description: string;
  author: string;
  publisher: string;
  cover: string;
}

export default function ({toggleEditing}: EditBookProps) {
  const [form, formSet] = useState<BookForm>();

  return (
    <Screen>
      <CloseButton onPress={toggleEditing} />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 16}}
        showsVerticalScrollIndicator={false}
      >
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
      </ScrollView>
      <View style={styles.buttonContainer}>
        <FluidButton label="Add" onPress={addBook} />
      </View>
    </Screen>
  );

  function addBook() {
    console.log(form);
  }

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
