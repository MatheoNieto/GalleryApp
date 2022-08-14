import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {ImageWidget} from '../ImageWidget';
import {Routes} from '@features/Gallery/navigation/routes';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './ListImage.styles';
import {ListImageProps, dataImage} from './ListImage.types';

const ListImage: FC<ListImageProps> = ({data, navigation}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  console.log('=>data', data[0]);

  const handlePressWidget = (dataWidget: dataImage) =>
    navigation.navigate(Routes.DETAIL_IMAGE, {imageWidget: dataWidget});

  const renderWidgets = ({item}: {item: dataImage}) => (
    <ImageWidget
      image={item.urls.regular}
      title={item?.description}
      votes={item?.views}
      onPress={() => handlePressWidget(item)}
    />
  );

  if (data.length === 0) {
    return null;
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      renderItem={renderWidgets}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      numColumns={2}
    />
  );
};

export default ListImage;
