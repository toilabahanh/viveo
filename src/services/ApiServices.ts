import axios, {AxiosInstance, CreateAxiosDefaults} from 'axios';
import {IAPIService} from './types';

const PEXEL_API_KEY =
  '563492ad6f9170000100000191f1ec33cd734a50bd3a63b6a65b6d04';
const BASE_URL = 'https://api.pexels.com/';

const APIService = (props?: IAPIService): AxiosInstance => {
  const config: CreateAxiosDefaults = {
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      Authorization: `${PEXEL_API_KEY}`,
    },
    ...props,
  };

  const instance = axios.create(config);
  return instance;
};

export {APIService};
