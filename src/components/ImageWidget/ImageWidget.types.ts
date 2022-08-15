import { Animated } from "react-native";

export type ImageWidgetProps = {
  image: string;
  title: string | null;
  views: number | 0;
  onPress: () => void;
  y: Animated.Value;
  index: number;
};