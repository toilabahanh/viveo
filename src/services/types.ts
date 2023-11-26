import {AxiosRequestConfig} from 'axios';

enum APIMethod {}

interface IAPIService extends AxiosRequestConfig {}

interface VideoResource {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: Array<{
    id: number;
    quality: 'sd' | 'hd';
    file_type: string;
    width: number;
    height: number;
    fps: number;
    link: string;
  }>;
  video_pictures: Array<{
    id: number;
    picture: string;
    nr: number;
  }>;
}

interface PopularVideoResponse {
  videos: Array<VideoResource>;
  url: string;
  page: number;
  per_page: number;
  total_results: number;
  prev_page?: string;
  next_page?: string;
}

export {APIMethod};
export type {IAPIService, PopularVideoResponse, VideoResource};
