import {View} from 'react-native';
import useBooksViewModel from '../../../core/presentation/useBooksViewModel';
import Screen from '../../atoms/Screen';
import FloatingButton from '../../molecules/FloatingButton';
import BookTileRenderer from '../../organisms/BookTileRenderer';

export default function () {
  const {books} = useBooksViewModel();

  return (
    <Screen>
      <BookTileRenderer data={books} />
      <View style={{paddingVertical: 16}} />
      <FloatingButton />
    </Screen>
  );
}
