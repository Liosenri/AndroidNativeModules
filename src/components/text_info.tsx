import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LIGHT_GRAY } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  text: string;
  iconName: string;
}

const index = ({ text, iconName }: Props) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={24} color="black" />
      <Text style={{ marginLeft: 8 }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GRAY,
    padding: 8,
    borderRadius: 5,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default index;
