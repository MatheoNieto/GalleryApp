import {Http} from '@core/services';
import {endPoints} from '@shared/endPoints';

export const getPhotosAuthor = async (username: string) => {

  const url = endPoints.getPhotosAuthor.replace(':username', username)

  const response = await Http.get(url);
  return Promise.resolve(response);
};

export const queryKey = {
  get_photos_author: 'get_photos_author',
};
