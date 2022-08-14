import {useQuery, UseQueryResult} from 'react-query';
import {queryKey, getPhotos} from './getPhoto.service';
import {RequestGetPhotosResponse} from './getPhotos.types';

export const useGetPhotos = (): UseQueryResult<RequestGetPhotosResponse, any> =>
  useQuery({
    queryKey: queryKey.get_photos,
    queryFn: () => getPhotos(),
  });
