import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  icon: string;
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const custom_button = ({ icon, title, onPress, style }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Icon name={icon} size={24} color="white"></Icon>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 5,
  },
  title: { color: 'white', marginLeft: 8, fontWeight: 'bold' },
});

export default custom_button;
