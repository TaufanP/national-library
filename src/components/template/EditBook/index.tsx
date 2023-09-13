import {ScrollView, View} from 'react-native';
import {Book} from '../../../core/domain/models/book';
import useEditBookViewModel from '../../../core/presentation/useEditBookViewModel';
import Headline from '../../atoms/Headline';
import Screen from '../../atoms/Screen';
import CloseButton from '../../molecules/CloseButton';
import FluidButton from '../../molecules/FluidButton';
import BookForm from '../../organisms/BookForm';
import styles from './styles';

interface EditBookProps {
  book?: Book;
  toggleEditing(): () => void;
}

export default function ({toggleEditing, book}: EditBookProps) {
  const {addBook, deleteBook, onChangeForm, updateBook} = useEditBookViewModel({
    onSuccess: toggleEditing(),
  });

  const headlineText = !book ? 'Add Book' : 'Edit Book';

  return (
    <Screen>
      <CloseButton onPress={toggleEditing()} />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Headline label={headlineText} />
        <BookForm onChangeForm={onChangeForm} book={book} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        {!book ? (
          <FluidButton label="Add" onPress={addBook} />
        ) : (
          <>
            <FluidButton label="Delete" isDanger onPress={deleteBook} />
            <FluidButton label="Save" onPress={updateBook} />
          </>
        )}
      </View>
    </Screen>
  );
}
