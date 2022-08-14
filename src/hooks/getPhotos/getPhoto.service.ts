import {Http} from '@core/services';
import {endPoints} from '@shared/endPoints';

export const getPhotos = async () => {
  const response = await Http.get(endPoints.getPhotosRandom, {count: 15});
  return Promise.resolve(response);
};

export const queryKey = {
  get_photos: 'get_photos',
};
