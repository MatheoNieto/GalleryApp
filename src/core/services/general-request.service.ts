import axios from 'axios';
import {config} from '@environment/environment';

class GeneralRequestService {
  static instance: GeneralRequestService;
  httpService;

  constructor() {
    this.httpService = axios;
  }
  static getInstance() {
    if (!GeneralRequestService.instance) {
      GeneralRequestService.instance = new GeneralRequestService();
    }
    return GeneralRequestService.instance;
  }

  async get(endpoint: string, params = {}) {
    const response = await this.httpService.get(endpoint, {
      params: {
        client_id: config.accessKeyUnsplash,
        ...params,
      },
    });
    return response.data;
  }
}

export default GeneralRequestService.getInstance();
