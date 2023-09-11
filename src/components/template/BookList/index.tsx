import {View} from 'react-native';
import Screen from '../../atoms/Screen';
import FloatingButton from '../../molecules/FloatingButton';
import BookTileRenderer from '../../organisms/BookTileRenderer';
import {Book} from '../../../core/domain/models/book';
import useBooksViewModel from '../../../core/presentation/useBooksViewModel';

interface BookListProps {
  toggleEditing(): void;
}

export default function ({toggleEditing}: BookListProps) {
  const {books} = useBooksViewModel();

  return (
    <Screen>
      <BookTileRenderer data={books} />
      <View style={{paddingVertical: 16}} />
      <FloatingButton onPress={toggleEditing} />
    </Screen>
  );
}
