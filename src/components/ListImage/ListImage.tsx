import React, {FC} from 'react';
import {FlatList, Animated} from 'react-native';
import {ImageWidget} from '../ImageWidget';
import {Routes} from '@features/Gallery/navigation/routes';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './ListImage.styles';
import {ListImageProps, dataImage} from './ListImage.types';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ListImage: FC<ListImageProps> = ({data, navigation}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  const y = new Animated.Value(0);

  const handlePressWidget = (photoId: string) =>
    navigation.navigate(Routes.DETAIL_IMAGE, {
      photoId,
      allPhotos: data,
    });

  const renderWidgets = ({item, index}: {item: dataImage; index: number}) => (
    <ImageWidget
      image={item.urls.regular}
      title={item.description}
      views={item.views}
      onPress={() => handlePressWidget(item.id)}
      y={y}
      index={index}
    />
  );

  return (
    <AnimatedFlatList
      bounces={false}
      scrollEventThrottle={10}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y}}}], {
        useNativeDriver: true,
      })}
      contentContainerStyle={styles.container}
      data={data}
      renderItem={renderWidgets}
      keyExtractor={(item: dataImage, index: number) => `${item.id}-${index}`}
    />
  );
};

export default ListImage;
