import {StackNavigationProp} from '@react-navigation/stack';

import {Routes} from './routes';
import {dataMockType} from '../mock/dataImages'

export type GalleryStackParamList = {
  [Routes.DETAIL_IMAGE]: {imageWidget: dataMockType};
  [Routes.HOME_GALLERY]: undefined;
  [Routes.PROFILE_GALLERY]: {dataAuthor: dataMockType};
};

export type GalleryStackProps = StackNavigationProp<GalleryStackParamList>;
