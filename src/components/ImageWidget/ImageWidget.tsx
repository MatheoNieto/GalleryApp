import React, {FC} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './ImageWidget.styles';
import {ImageWidgetProps} from './ImageWidget.types';


const ImageWidget: FC<ImageWidgetProps> = ({image, title, votes, onPress}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <ImageBackground
        source={image}
        style={styles.imgBackground}
        imageStyle={styles.imageStyle}>
        <View style={styles.contentInfo}>
          <Text style={[styles.label]}>{title}</Text>
          <Text style={[styles.label, styles.labelVotes]}>{votes}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default ImageWidget;
