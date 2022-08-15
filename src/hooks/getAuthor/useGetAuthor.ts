import {useQuery, UseQueryResult} from 'react-query';
import {queryKey,getAuthor } from './getAuthor.service';
import { RequestGetAuthorResponse } from '@models/getAuthor.types';

export const useGetAuthor = (username: string) :UseQueryResult<RequestGetAuthorResponse, any> =>
  useQuery({
    queryKey: queryKey.get_author,
    queryFn: () => getAuthor(username),
  });
