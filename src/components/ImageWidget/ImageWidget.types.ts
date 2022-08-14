import {ImageSourcePropType} from 'react-native'

export type ImageWidgetProps = {
  image: ImageSourcePropType;
  title: string;
  votes: string;
  onPress: () => void;
};