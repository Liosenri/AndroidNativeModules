import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LIGHT_GRAY } from '../constants';
import EncryptModule from '../native_modules/encrypt';

interface Props {}

const index = (props: Props) => {
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const output = await EncryptModule.encryptTextPromise(text);
        setEncryptedText(output);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [text]);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Write something"
          value={text}
          onChangeText={setText}
          style={styles.textInput}
        />
      </View>

      <Text style={styles.encryptedText} numberOfLines={99}>
        {encryptedText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  textInput: {
    backgroundColor: LIGHT_GRAY,
    padding: 8,
    borderRadius: 5,
  },
  encryptedText: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  textInputContainer: { backgroundColor: 'white', padding: 16 },
});

export default index;
