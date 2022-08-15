import {StackNavigationProp} from '@react-navigation/stack';
import {Routes} from './routes';
import {RequestGetPhotosResponse} from '@models/getPhotos.types'

export type GalleryStackParamList = {
  [Routes.DETAIL_IMAGE]: {dataPhoto: RequestGetPhotosResponse};
  [Routes.HOME_GALLERY]: undefined;
  [Routes.PROFILE_GALLERY]: {username: string};
};

export type GalleryStackProps = StackNavigationProp<GalleryStackParamList>;
