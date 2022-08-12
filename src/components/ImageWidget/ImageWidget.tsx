import React, {FC} from 'react';
import {View, Text, ImageBackground, ImageSourcePropType} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './ImageWidget.styles';

type Props = {
  image: ImageSourcePropType;
  title: string;
  votes: string;
};

const ImageWidget: FC<Props> = ({image, title, votes}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  return (
    <ImageBackground
      source={image}
      style={styles.imgBackground}
      imageStyle={styles.imageStyle}>
      <View style={styles.contentInfo}>
        <Text style={[styles.label]}>{title}</Text>
        <Text style={[styles.label, styles.labelVotes]}>{votes}</Text>
      </View>
    </ImageBackground>
  );
};

export default ImageWidget;
