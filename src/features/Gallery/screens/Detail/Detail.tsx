import React, {FC, useEffect} from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {DetailProps} from './Detail.types';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Detail.styles';
import {Routes} from '../../navigation/routes';
import {useGetPhoto} from '@hooks/getPhoto';

const Detail: FC<DetailProps> = ({route, navigation}) => {
  const {photoId} = route.params;
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  const {isLoading, data: imageWidget, refetch} = useGetPhoto(photoId);

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

  return (
    <ImageBackground
      source={{uri: imageWidget.urls.full}}
      style={styles.imgBackground}>
      <View style={styles.contentInfo}>
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
      </View>
    </ImageBackground>
  );
};

export default Detail;
