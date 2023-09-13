import {FlatList, View} from 'react-native';
import {Book} from '../../../core/domain/models/book';
import BookTile from '../../molecules/BookTile';
import styles from './styles';

interface BookTileRendererProps {
  data: Book[];
  onPress?(book: Book): () => void;
}

export default function ({data, onPress}: BookTileRendererProps) {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      ItemSeparatorComponent={ItemSeparatorComponent}
      keyExtractor={book => book.id}
      renderItem={renderBooks(onPress)}
    />
  );
}

function renderBooks(onPress: BookTileRendererProps['onPress']) {
  return function ({item: book}: {item: Book}) {
    function onTap() {
      onPress && onPress(book)();
    }
    return <BookTile {...book} onPress={onTap} />;
  };
}

function ItemSeparatorComponent() {
  return <View style={{paddingVertical: 8}} />;
}
