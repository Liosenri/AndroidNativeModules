import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import NativeNavigation from '../native_modules/native_navigation';
import TextInfo from '../components/text_info';

interface Props {}

const login_screen = (props: Props) => {
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');

  const handleOnPress = async () => {
    try {
      const result = await NativeNavigation.showLoginActivity();
      setPassword(result.password);
      setuserName(result.username);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInfo text={userName} iconName="user" />
      <TextInfo text={password} iconName="key" />

      <Button
        color="black"
        onPress={handleOnPress}
        title="Show Login Activity"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: 'white' },
});

export default login_screen;
