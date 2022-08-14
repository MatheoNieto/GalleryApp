import {StackNavigationProp} from '@react-navigation/stack';
import {Routes} from './routes';

export type GalleryStackParamList = {
  [Routes.DETAIL_IMAGE]: {photoId: string};
  [Routes.HOME_GALLERY]: undefined;
  [Routes.PROFILE_GALLERY]: {username: string};
};

export type GalleryStackProps = StackNavigationProp<GalleryStackParamList>;
