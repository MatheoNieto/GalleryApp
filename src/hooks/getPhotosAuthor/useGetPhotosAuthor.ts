import {RequestGetPhotosResponse} from '@models/getPhotos.types';
import {useQuery, UseQueryResult} from 'react-query';
import {queryKey, getPhotosAuthor} from './getPhotoAuthor.service';

export const useGetPhotosAuthor = (
  username: string,
): UseQueryResult<RequestGetPhotosResponse, any> =>
  useQuery({
    queryKey: queryKey.get_photos_author,
    queryFn: () => getPhotosAuthor(username),
  });
