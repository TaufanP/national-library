import {ScrollView, View} from 'react-native';
import Screen from '../../atoms/Screen';
import CloseButton from '../../molecules/CloseButton';
import FluidButton from '../../molecules/FluidButton';
import colors from '../../../constants/colors';

interface EditBookProps {
  toggleEditing(): void;
}

export default function ({toggleEditing}: EditBookProps) {
  return (
    <Screen>
      <CloseButton onPress={toggleEditing} />
      <ScrollView></ScrollView>
      <View
        style={{
          backgroundColor: colors.white,
          bottom: 16,
          flex: 1,
          padding: 16,
          position: 'absolute',
          width: '100%',
        }}
      >
        <FluidButton label="Save" />
      </View>
    </Screen>
  );
}
