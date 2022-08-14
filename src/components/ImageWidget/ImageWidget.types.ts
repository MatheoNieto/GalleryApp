import { Animated } from "react-native";

export type ImageWidgetProps = {
  image: string;
  title: string | null;
  views: number | 0;
  onPress: () => void;
  noShowInfo: boolean | false;
  y: Animated.Value;
  index: number;
};