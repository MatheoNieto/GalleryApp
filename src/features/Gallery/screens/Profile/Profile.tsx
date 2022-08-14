import React, {FC} from 'react';
import {Text, View, Image} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Profile.styles';
import {ProfileProps} from './Profile.types';
import {ListImage} from '@components/ListImage';
import {data} from '../../mock/dataImages';

const Profile: FC<ProfileProps> = ({route, navigation}) => {
  const {dataAuthor} = route.params;

  const {theme} = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.author}>
        <Image source={dataAuthor.author.image} style={styles.authorImage} />
        <View style={styles.infoAuthor}>
          <Text style={styles.nameAuthor}>{dataAuthor.author.fullName}</Text>
          <Text style={styles.bioAuthor}>{dataAuthor.author.bio}</Text>
        </View>
      </View>

      <View style={styles.myPhotos}>
        <Text style={styles.title}>My Photos</Text>
        <ListImage navigation={navigation} data={data} />
      </View>
    </View>
  );
};

export default Profile;
