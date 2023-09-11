import {ScrollView} from 'react-native';
import Screen from '../../atoms/Screen';
import CloseButton from '../../molecules/CloseButton';

interface EditBookProps {
  toggleEditing(): void;
}

export default function ({toggleEditing}: EditBookProps) {
  return (
    <Screen>
      <CloseButton onPress={toggleEditing} />
      <ScrollView></ScrollView>
    </Screen>
  );
}
