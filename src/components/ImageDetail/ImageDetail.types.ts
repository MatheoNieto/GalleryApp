import {RequestGetPhotosResponse} from '@models/getPhotos.types';

export type ImageDetailProps = {
  dataImage: RequestGetPhotosResponse;
  onShowProfile: ()=> void;
};
