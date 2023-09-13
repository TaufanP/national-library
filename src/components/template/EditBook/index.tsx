import {ScrollView, Text, View} from 'react-native';
import useEditBookViewModel from '../../../core/presentation/useEditBookViewModel';
import Screen from '../../atoms/Screen';
import CloseButton from '../../molecules/CloseButton';
import FluidButton from '../../molecules/FluidButton';
import BookForm from '../../organisms/BookForm';
import styles from './styles';
import {Book} from '../../../core/domain/models/book';
import colors from '../../../constants/colors';

interface EditBookProps {
  book?: Book;
  toggleEditing(): () => void;
}

export default function ({toggleEditing, book}: EditBookProps) {
  const {addBook, onChangeForm} = useEditBookViewModel({
    onSuccess: toggleEditing,
  });

  console.log({book});

  return (
    <Screen>
      <CloseButton onPress={toggleEditing()} />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            color: colors.textDark,
            marginBottom: 24,
          }}
        >
          {!book ? 'Add Book' : 'Edit Book'}
        </Text>
        <BookForm onChangeForm={onChangeForm} book={book} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        {!book ? (
          <FluidButton label="Add" onPress={addBook} />
        ) : (
          <FluidButton label="Save" onPress={addBook} />
        )}
      </View>
    </Screen>
  );
}
