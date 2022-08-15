import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import {DetailProps} from './Detail.types';
import {ImageDetail} from '@components/ImageDetail';
import {Routes} from '../../navigation/routes';
import {RequestGetPhotosResponse} from '@models/getPhotos.types';

const Detail: FC<DetailProps> = ({route, navigation}) => {
  const {allPhotos} = route.params;

  const handleShowProfile = (username: string) =>
    navigation.navigate(Routes.PROFILE_GALLERY, {
      username,
    });

  const renderImageDetail = ({item}: {item: RequestGetPhotosResponse}) => (
    <ImageDetail
      dataImage={item}
      onShowProfile={() => handleShowProfile(item.user.username)}
    />
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={allPhotos}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderImageDetail}
      />
    </View>
  );
};

export default Detail;
