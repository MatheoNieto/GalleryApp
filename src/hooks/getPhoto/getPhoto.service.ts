import {Http} from '@core/services';
import {endPoints} from '@shared/endPoints';

export const getPhoto = async (photoId: string) => {

  const url = endPoints.getPhoto.replace(':id', photoId)

  const response = await Http.get(url);
  return Promise.resolve(response);
};

export const queryKey = {
  get_detail_photo: 'get_detail_photo',
};
