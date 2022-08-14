import React, {FC} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Animated,
  Dimensions,
} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './ImageWidget.styles';
import {ImageWidgetProps} from './ImageWidget.types';

const {height: wHeight} = Dimensions.get('window');
const height = wHeight - 64;

const ImageWidget: FC<ImageWidgetProps> = ({
  image,
  title,
  views,
  onPress,
  noShowInfo,
  y,
  index,
}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  const position = Animated.subtract(index * 218, y);

  const isDisappearing = -218;
  const isTop = 0;
  const isBottom = height - 218;
  const isAppearing = height;

  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * 218],
        outputRange: [0, -index * 218],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -218 / 4],
      extrapolate: 'clamp',
    }),
  );

  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });

  return (
    <Animated.View
      key={index}
      style={{opacity, transform: [{translateY}, {scale}]}}>
      <Pressable style={[styles.container]} onPress={onPress}>
        <ImageBackground
          source={{uri: image}}
          style={styles.imgBackground}
          imageStyle={styles.imageStyle}>
          {!noShowInfo && (
            <View style={styles.contentInfo}>
              <Text
                style={[styles.label]}
                numberOfLines={2}
                ellipsizeMode="tail">
                {title}
              </Text>
              <Text
                style={[
                  styles.label,
                  styles.labelVotes,
                ]}>{`${views} views`}</Text>
            </View>
          )}
        </ImageBackground>
      </Pressable>
    </Animated.View>
  );
};

export default ImageWidget;
