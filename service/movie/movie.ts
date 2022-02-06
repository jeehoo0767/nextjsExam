import Axios, { AxiosRequestConfig } from 'axios';
import { GET, JSON_HEADER } from 'shared/api-constant';

export const movie = {
  getMovies: async () => {
    const config: AxiosRequestConfig = {
      method: GET,
      url: `https://api.themoviedb.org/3/movie/popular?api_key=3e1ccd299569e84acfbfb0bd37323f01&language=en-US&page=1`,
      headers: {
        ...JSON_HEADER,
      },
    };

    return Axios(config);
  },
};
