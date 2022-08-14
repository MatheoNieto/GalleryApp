import {GalleryStackParamList} from '@features/Gallery/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {dataMockType} from '@features/Gallery/mock/dataImages';
import {ImageWidget} from '../ImageWidget';
import {Routes} from '@features/Gallery/navigation/routes';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './ListImage.styles';

type Props = {
  data: dataMockType[];
  navigation: StackNavigationProp<GalleryStackParamList>;
};

const ListImage: FC<Props> = ({data, navigation}) => {
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
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      renderItem={renderWidgets}
      keyExtractor={(item, index) => `${item.title}-${index}`}
      numColumns={2}
    />
  );
};

export default ListImage;
