import React, {FC} from 'react';
import {View} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Home.styles';
import {HomeProps} from './Home.types';
import {data} from '../../mock/dataImages';
import {ListImage} from '@components/ListImage';

const Home: FC<HomeProps> = ({navigation}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <ListImage data={data} navigation={navigation} />
    </View>
  );
};

export default Home;
