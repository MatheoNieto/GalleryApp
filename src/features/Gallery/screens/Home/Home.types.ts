import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {GalleryStackParamList, Routes} from '../../navigation';

type GalleryParams = StackNavigationProp<
  GalleryStackParamList,
  Routes.HOME_GALLERY
>;

type GalleryRoute = RouteProp<
  GalleryStackParamList,
  Routes.HOME_GALLERY
>;

export type HomeProps = {
  navigation: GalleryParams;
  route: GalleryRoute;
};
