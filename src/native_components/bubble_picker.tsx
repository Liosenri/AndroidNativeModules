import React from 'react';
import {
  ViewProps,
  requireNativeComponent,
  NativeSyntheticEvent,
} from 'react-native';

export interface BubbleEventType {
  title: string;
}

const BubblePicker = requireNativeComponent('BubblePicker');

interface Props extends ViewProps {
  onBubbleSelected(event: NativeSyntheticEvent<BubbleEventType>): void;
  onBubbleDeselected(event: NativeSyntheticEvent<BubbleEventType>): void;
  items: string[];
}

const BubblePickerComponent = (props: Props) => {
  return <BubblePicker {...props} />;
};

export default BubblePickerComponent;
