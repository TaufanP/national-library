import {ScrollView, View} from 'react-native';
import Screen from '../../atoms/Screen';
import CloseButton from '../../molecules/CloseButton';
import FluidButton from '../../molecules/FluidButton';
import styles from './styles';

interface EditBookProps {
  toggleEditing(): void;
}

export default function ({toggleEditing}: EditBookProps) {
  return (
    <Screen>
      <CloseButton onPress={toggleEditing} />
      <ScrollView></ScrollView>
      <View style={styles.buttonContainer}>
        <FluidButton label="Save" />
      </View>
    </Screen>
  );
}
