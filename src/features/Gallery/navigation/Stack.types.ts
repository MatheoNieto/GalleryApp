import {StackNavigationProp} from '@react-navigation/stack';

import {Routes} from './routes';
import {dataImage} from '@components/ListImage/ListImage.types'

export type GalleryStackParamList = {
  [Routes.DETAIL_IMAGE]: {imageWidget: dataImage};
  [Routes.HOME_GALLERY]: undefined;
  [Routes.PROFILE_GALLERY]: {dataAuthor: dataImage};
};

export type GalleryStackProps = StackNavigationProp<GalleryStackParamList>;
