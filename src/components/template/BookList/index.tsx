import {useEffect} from 'react';
import {View} from 'react-native';
import useBooksViewModel from '../../../core/presentation/useBooksViewModel';
import Screen from '../../atoms/Screen';
import BookTileRenderer from '../../organisms/BookTileRenderer';

export default function () {
  const {books} = useBooksViewModel();

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <Screen>
      <BookTileRenderer data={books} />
      <View style={{paddingVertical: 16}} />
    </Screen>
  );
}
