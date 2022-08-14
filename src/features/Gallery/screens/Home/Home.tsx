import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import {ImageWidget} from '../../../../components/ImageWidget';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Home.styles';
import {HomeProps} from './HomeProps';
import {Routes} from '../../navigation/routes';
import {dataMockType, data} from '../../mock/dataImages';

const Home: FC<HomeProps> = ({navigation}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  const handlePressWidget = (dataWidget: dataMockType) =>
    navigation.navigate(Routes.DETAIL_IMAGE, {imageWidget: dataWidget});

  const renderWidgets = ({item}: {item: dataMockType}) => (
    <ImageWidget
      image={item.image}
      title={item.title}
      votes={item.votes}
      onPress={() => handlePressWidget(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderWidgets}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        numColumns={2}
      />
    </View>
  );
};

export default Home;
