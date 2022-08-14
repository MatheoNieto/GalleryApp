import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Home.styles';
import {HomeProps} from './Home.types';
import {ListImage} from '@components/ListImage';
import {useGetPhotos} from '@hooks/getPhotos';

const Home: FC<HomeProps> = ({navigation}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  const {isLoading, data: photos} = useGetPhotos();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ListImage data={photos} navigation={navigation} />
      )}
    </View>
  );
};

export default Home;
