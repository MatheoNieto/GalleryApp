import React from 'react';
import {View, FlatList} from 'react-native';
import {ImageWidget} from '../../../../components/ImageWidget';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Home.styles';
import {data} from './mock/dataImages';

const Home = () => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  const renderWidgets = ({item}) => (
    <ImageWidget image={item.image} title={item.title} votes={item.voting} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderWidgets}
        keyExtractor={(item, index) => `${item.title}-${index}`}
      />
    </View>
  );
};

export default Home;
