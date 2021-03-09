import React from 'react';
import { View, Text, Button } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../navigation';
import CustomButton from '../components/custom_button';

type ProfileScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const index = ({ navigation }: Props) => {
  const handleNavigation = (route: keyof HomeStackParamList) =>
    navigation.navigate(route);

  return (
    <View style={{ padding: 16, flex: 1 }}>
      <CustomButton
        icon="circle"
        onPress={() => handleNavigation('Circles')}
        title="Bubbles"
        style={{ marginBottom: 16 }}
      />
      <CustomButton
        icon="lock"
        onPress={() => handleNavigation('Encrypt')}
        title="Encrypt"
        style={{ marginBottom: 16 }}
      />

      <CustomButton
        icon="login"
        onPress={() => handleNavigation('Login')}
        title="Login"
        style={{ marginBottom: 16 }}
      />
    </View>
  );
};

export default index;
