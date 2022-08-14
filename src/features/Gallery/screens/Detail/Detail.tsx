import React, {FC} from 'react';
import {Text, ImageBackground, View, Image} from 'react-native';
import {DetailProps} from './Detail.types';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Detail.styles';
import {Routes} from '../../navigation/routes'

const Detail: FC<DetailProps> = ({route, navigation}) => {
  const {imageWidget} = route.params;
  const {theme} = useTheme();
  const styles = makeStyles(theme);


  const handleShowProfile = () => navigation.navigate(Routes.PROFILE_GALLERY)
  
  return (
    <ImageBackground source={imageWidget.image} style={styles.imgBackground}>
      <View style={styles.contentInfo}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{imageWidget.title}</Text>
        <Text style={styles.votes}>{imageWidget.votes}</Text>

        <View style={styles.author}>
          <Image source={imageWidget.author.image} style={styles.authorImage}/>
          <View>
            <Text style={styles.nameAuthor}>{imageWidget.author.fullName}</Text>
            <Text style={styles.viewProfile}onPress={handleShowProfile}>View profile</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Detail;
