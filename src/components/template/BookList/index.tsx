import {View} from 'react-native';
import {BooksCase} from '../../../core/domain/useCases/book';
import useBooksViewModel from '../../../core/presentation/useBooksViewModel';
import Screen from '../../atoms/Screen';
import FloatingButton from '../../molecules/FloatingButton';
import BookTileRenderer from '../../organisms/BookTileRenderer';

interface BookListProps {
  toggleEditing(): () => void;
  booksCase: BooksCase;
}

export default function ({toggleEditing, booksCase}: BookListProps) {
  const {books} = useBooksViewModel(booksCase);

  return (
    <Screen>
      <BookTileRenderer data={books} onPress={toggleEditing} />
      <View style={{paddingVertical: 16}} />
      <FloatingButton onPress={toggleEditing()} />
    </Screen>
  );
}
