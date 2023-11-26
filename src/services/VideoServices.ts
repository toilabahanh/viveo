import {AxiosResponse} from 'axios';
import {APIService} from './ApiServices';
import {PopularVideoResponse} from './types';

const getPopularVideo = async (
  perPage: number,
): Promise<AxiosResponse<PopularVideoResponse, any>> => {
  const response = await APIService().get(
    `/videos/popular?per_page=${perPage}`,
  );
  return response;
};

export {getPopularVideo};
