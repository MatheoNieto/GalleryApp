import React, {FC} from 'react';
import {View, Text, ImageBackground, ImageSourcePropType} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles, gradient} from './ImageWidget.styles';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  image: ImageSourcePropType;
  title: string;
  votes: string;
};

const ImageWidget: FC<Props> = ({image, title, votes}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  const {start, end, colors} = gradient(theme);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.imgBackground}
        imageStyle={styles.imageStyle}
      />
      <LinearGradient start={start} end={end} colors={colors}>
        <Text>{title}</Text>
        <Text>{votes}</Text>
      </LinearGradient>
    </View>
  );
};

export default ImageWidget;
