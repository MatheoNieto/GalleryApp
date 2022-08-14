export type ImageWidgetProps = {
  image: string;
  title: string | null;
  votes: number | 0;
  onPress: () => void;
};