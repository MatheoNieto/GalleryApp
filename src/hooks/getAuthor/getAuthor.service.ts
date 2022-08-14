import {Http} from '@core/services';
import {endPoints} from '@shared/endPoints';

export const getAuthor = async (username: string) => {

  const url = endPoints.getAuthor.replace(':username', username)
  
  const response = await Http.get(url);
  return Promise.resolve(response);
};

export const queryKey = {
  get_author: 'get_author',
};
