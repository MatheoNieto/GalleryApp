import React, {FC} from 'react';
import {View} from 'react-native';
import {DetailProps} from './Detail.types';
import {ImageDetail} from '@components/ImageDetail';
import {Routes} from '../../navigation/routes';

const Detail: FC<DetailProps> = ({route, navigation}) => {
  const {dataPhoto} = route.params;

  const handleShowProfile = (username: string) =>
    navigation.navigate(Routes.PROFILE_GALLERY, {
      username,
    });

  return (
    <View style={{flex: 1}}>
      <ImageDetail
        dataImage={dataPhoto}
        onShowProfile={() => handleShowProfile(dataPhoto.user.username)}
      />
    </View>
  );
};

export default Detail;
