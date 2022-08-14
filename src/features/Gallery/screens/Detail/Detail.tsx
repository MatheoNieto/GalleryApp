import React, {FC, useEffect, useState} from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  ActivityIndicator,
  Pressable,
  Animated,
} from 'react-native';
import {DetailProps} from './Detail.types';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Detail.styles';
import {Routes} from '../../navigation/routes';
import {useGetPhoto} from '@hooks/getPhoto';
import {AntDesign} from '@expo/vector-icons';

const Detail: FC<DetailProps> = ({route, navigation}) => {
  const {photoId, allPhotos} = route.params;
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  const [showInfoPhoto, setShowInfoPhoto] = useState(false);
  const visibility = new Animated.Value(showInfoPhoto ? 1 : 0);
  const {isLoading, data: imageWidget, refetch} = useGetPhoto(photoId);

  Animated.timing(visibility, {
    useNativeDriver: true,
    toValue: !showInfoPhoto ? 1 : 0,
    duration: 300,
  }).start();

  const handleShowInfo = () => setShowInfoPhoto(!showInfoPhoto);

  useEffect(() => {
    const handler = setTimeout(() => refetch(), 300);
    return () => clearTimeout(handler);
  }, [photoId]);

  const handleShowProfile = () =>
    navigation.navigate(Routes.PROFILE_GALLERY, {
      username: imageWidget.user.username,
    });

  if (isLoading) {
    return <ActivityIndicator />;
  }

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
      <ImageBackground
        source={{uri: imageWidget.urls.full}}
        style={styles.imgBackground}>

        <Animated.View style={[styles.actionSlides, containerStyle]}>
          <Pressable style={[styles.btnAction, styles.btnLeft]}>
            <AntDesign name="leftcircleo" size={30} color="white" />
          </Pressable>

          <Pressable style={[styles.btnAction, styles.btnRight]}>
            <AntDesign name="rightcircleo" size={30} color="white" />
          </Pressable>
        </Animated.View>

        <Animated.View style={[styles.contentInfo, containerStyle]}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {imageWidget.description}
          </Text>
          <Text style={styles.votes}>{`${imageWidget.views} views`}</Text>

          <View style={styles.author}>
            <Image
              source={{uri: imageWidget.user.profile_image.medium}}
              style={styles.authorImage}
            />
            <View>
              <Text
                style={
                  styles.nameAuthor
                }>{`${imageWidget.user.name} ${imageWidget.user.last_name}`}</Text>
              <Text style={styles.viewProfile} onPress={handleShowProfile}>
                View profile
              </Text>
            </View>
          </View>
        </Animated.View>
      </ImageBackground>
    </Pressable>
  );
};

export default Detail;
