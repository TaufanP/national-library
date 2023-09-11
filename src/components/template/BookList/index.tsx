import {View} from 'react-native';
import Screen from '../../atoms/Screen';
import FloatingButton from '../../molecules/FloatingButton';
import BookTileRenderer from '../../organisms/BookTileRenderer';
import {Book} from '../../../core/domain/models/book';

interface BookListProps {
  books: Book[];
  toggleEditing(): void;
}

export default function ({books, toggleEditing}: BookListProps) {
  return (
    <Screen>
      <BookTileRenderer data={books} />
      <View style={{paddingVertical: 16}} />
      <FloatingButton onPress={toggleEditing} />
    </Screen>
  );
}
