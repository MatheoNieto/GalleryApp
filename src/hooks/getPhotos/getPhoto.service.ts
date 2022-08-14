import {unsplashApi} from '@core/services';

export const getPhotos = async () => {
  const response = unsplashApi.photos.get();

  console.log('response', response);

  return Promise.resolve();
};

export const queryKey = {
  get_photos: 'get_photos'
}