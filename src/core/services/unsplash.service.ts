import { createApi } from 'unsplash-js';
import {config} from '@environment/environment';

export const unsplashApi = createApi({
  accessKey: config.accessKeyUnsplash,
});

