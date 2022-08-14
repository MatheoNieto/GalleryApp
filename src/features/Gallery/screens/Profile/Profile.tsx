import React, {FC} from 'react';
import {Text, View, Image, ActivityIndicator} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Profile.styles';
import {ProfileProps} from './Profile.types';
import {ListImage} from '@components/ListImage';
import {useGetAuthor} from '@hooks/getAuthor';

const Profile: FC<ProfileProps> = ({route, navigation}) => {
  const {username} = route.params;

  const {theme} = useTheme();
  const styles = makeStyles(theme);

  const {isLoading, data: dataAuthor} = useGetAuthor(username);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.author}>
        <Image source={{uri: dataAuthor.profile_image.medium}} style={styles.authorImage} />
        <View style={styles.infoAuthor}>
          <Text style={styles.nameAuthor}>{dataAuthor.name}</Text>
          <Text style={styles.bioAuthor}>{dataAuthor.bio}</Text>
        </View>
      </View>

      <View style={styles.myPhotos}>
        <Text style={styles.title}>My Photos</Text>
        <ListImage navigation={navigation} data={dataAuthor.photos} noShowInfo={true} />
      </View>
    </View>
  );
};

export default Profile;
