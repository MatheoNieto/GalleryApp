import React, {FC} from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './ImageWidget.styles';
import {ImageWidgetProps} from './ImageWidget.types';

const ImageWidget: FC<ImageWidgetProps> = ({
  image,
  title,
  views,
  onPress,
  noShowInfo,
}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <ImageBackground
        source={{uri: image}}
        style={styles.imgBackground}
        imageStyle={styles.imageStyle}>
        {!noShowInfo && (
          <View style={styles.contentInfo}>
            <Text style={[styles.label]}>{title}</Text>
            <Text
              style={[
                styles.label,
                styles.labelVotes,
              ]}>{`${views} views`}</Text>
          </View>
        )}
      </ImageBackground>
    </Pressable>
  );
};

export default ImageWidget;
