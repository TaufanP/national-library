import {ScrollView, View} from 'react-native';
import useEditBookViewModel from '../../../core/presentation/useEditBookViewModel';
import Screen from '../../atoms/Screen';
import CloseButton from '../../molecules/CloseButton';
import FluidButton from '../../molecules/FluidButton';
import BookForm from '../../organisms/BookForm';
import styles from './styles';

interface EditBookProps {
  toggleEditing(): void;
}

export default function ({toggleEditing}: EditBookProps) {
  const {addBook, onChangeForm} = useEditBookViewModel({
    onSuccessAdd: toggleEditing,
  });

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
}
