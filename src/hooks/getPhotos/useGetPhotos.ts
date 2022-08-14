import {useQuery} from 'react-query';
import {queryKey, getPhotos} from './getPhoto.service';

export const useGetPhotos = () =>
  useQuery({
    queryKey: queryKey.get_photos,
    queryFn: () => getPhotos(),
  });
