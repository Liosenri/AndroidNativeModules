import React, { useState } from 'react';
import { View, StyleSheet, NativeSyntheticEvent } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Chip from '../components/chip';
import BubblePicker, {
  BubbleEventType,
} from '../native_components/bubble_picker';

interface Props {}

const index = (props: Props) => {
  const names = ['Luis', 'Gerson', 'Maria', 'Miguel'];
  const [selectedNames, setselectedNames] = useState<string[]>([]);

  const handleOnBubbleSelected = ({
    nativeEvent: { title },
  }: NativeSyntheticEvent<BubbleEventType>) =>
    setselectedNames(selectedNames.concat(title));

  const handleOnBubbleDeselected = ({
    nativeEvent: { title },
  }: NativeSyntheticEvent<BubbleEventType>) =>
    setselectedNames(selectedNames.filter((name) => name != title));

  const renderSelectedNames = () =>
    selectedNames.map((name) => <Chip key={name} text={name} />);

  return (
    <View style={styles.container}>
      <BubblePicker
        style={styles.container}
        onBubbleSelected={handleOnBubbleSelected}
        onBubbleDeselected={handleOnBubbleDeselected}
        items={names}
      />
      <View style={styles.scrollViewContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContentContainerStyle}
          horizontal>
          {renderSelectedNames()}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollViewContainer: { height: 100, alignItems: 'center' },
  scrollViewContentContainerStyle: { padding: 16 },
});

export default index;
