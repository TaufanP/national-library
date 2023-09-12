import {FlatList, View} from 'react-native';
import {Book} from '../../../core/domain/models/book';
import BookTile from '../../molecules/BookTile';
import styles from './styles';

interface BookTileRendererProps {
  data: Book[];
}

export default function ({data}: BookTileRendererProps) {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      ItemSeparatorComponent={() => <View style={{paddingVertical: 8}} />}
      keyExtractor={book => book.id}
      renderItem={renderBooks}
    />
  );
}

function renderBooks({item: book}: {item: Book}) {
  return <BookTile {...book} />;
}
