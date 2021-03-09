import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
}

const index = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 12 }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 4,
    margin: 8,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default index;
