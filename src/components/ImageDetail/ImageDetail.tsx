import React, {FC, useState} from 'react';
import {Image, View, Text, Animated, Pressable, StatusBar} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './ImageDetail.styles';
import {ImageDetailProps} from './ImageDetail.types';

const ImageDetail: FC<ImageDetailProps> = ({dataImage, onShowProfile}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  const [showInfoPhoto, setShowInfoPhoto] = useState(false);
  const visibility = new Animated.Value(showInfoPhoto ? 1 : 0);

  Animated.timing(visibility, {
    useNativeDriver: true,
    toValue: !showInfoPhoto ? 1 : 0,
    duration: 300,
  }).start();

  const handleShowInfo = () => setShowInfoPhoto(!showInfoPhoto);

  const containerStyle = {
    opacity: visibility.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        scale: visibility.interpolate({
          inputRange: [0, 1],
          outputRange: [1.2, 1],
        }),
      },
    ],
  };

  return (
    <Pressable onPress={handleShowInfo} style={styles.pressable}>
      <StatusBar hidden/>
        <Image
          source={{uri: dataImage.urls.full}}
          style={styles.imageBackground}
        />
        <Animated.View style={[styles.contentInfo, containerStyle]}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {dataImage.description}
          </Text>
          <Text style={styles.votes}>{`${dataImage.views} views`}</Text>

          <View style={styles.author}>
            <Image
              source={{uri: dataImage.user.profile_image.medium}}
              style={styles.authorImage}
            />
            <View>
              <Text
                style={
                  styles.nameAuthor
                }>{`${dataImage.user.name} ${dataImage.user.last_name}`}</Text>
              <Text style={styles.viewProfile} onPress={onShowProfile}>
                View profile
              </Text>
            </View>
          </View>
        </Animated.View>
    </Pressable>
  );
};

export default ImageDetail;
