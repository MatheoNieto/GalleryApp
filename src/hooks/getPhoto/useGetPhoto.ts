import {RequestGetPhotosResponse} from '@models/getPhotos.types';
import {useQuery, UseQueryResult} from 'react-query';
import {queryKey, getPhoto} from './getPhoto.service';

export const useGetPhoto = (
  photoId: string,
): UseQueryResult<RequestGetPhotosResponse, any> =>
  useQuery({
    queryKey: queryKey.get_detail_photo,
    queryFn: () => getPhoto(photoId),
  });
