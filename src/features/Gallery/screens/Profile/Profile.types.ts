import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {GalleryStackParamList, Routes} from '../../navigation';

type GalleryParams = StackNavigationProp<
  GalleryStackParamList,
  Routes.PROFILE_GALLERY
>;

type GalleryRoute = RouteProp<
  GalleryStackParamList,
  Routes.PROFILE_GALLERY
>;

export type ProfileProps = {
  navigation: GalleryParams;
  route: GalleryRoute;
};
