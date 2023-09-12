import {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Screen from '../../atoms/Screen';
import CloseButton from '../../molecules/CloseButton';
import FluidButton from '../../molecules/FluidButton';
import BookForm, {BookForm as BookFormType} from '../../organisms/BookForm';
import styles from './styles';

interface EditBookProps {
  toggleEditing(): void;
}

export default function ({toggleEditing}: EditBookProps) {
  const [form, formSet] = useState<BookFormType>();

  return (
    <Screen>
      <CloseButton onPress={toggleEditing} />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <BookForm onChangeForm={onChangeForm} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <FluidButton label="Add" onPress={addBook} />
      </View>
    </Screen>
  );

  function addBook() {
    console.log(form);
  }

  function onChangeForm(form: BookFormType) {
    formSet(form);
  }
}
