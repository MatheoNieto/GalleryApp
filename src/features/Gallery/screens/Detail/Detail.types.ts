import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {GalleryStackParamList, Routes} from '../../navigation';

type GalleryParams = StackNavigationProp<
  GalleryStackParamList,
  Routes.DETAIL_IMAGE
>;

type GalleryRoute = RouteProp<
  GalleryStackParamList,
  Routes.DETAIL_IMAGE
>;

export type DetailProps = {
  navigation: GalleryParams;
  route: GalleryRoute;
};
