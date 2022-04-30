import Axios, { AxiosRequestConfig } from 'axios';
import { GET, JSON_HEADER } from 'shared/api-constant';

export const news = {
  getNaverNews: async () => {
    const config: AxiosRequestConfig = {
      method: GET,
      // url: 'https://openapi.naver.com/v1/search/news.json',
      url: 'https://openapi.naver.com/v1/search/local.json',
      headers: {
        ...JSON_HEADER,
        'X-Naver-Client-Id': process.env.NEXT_APP_PUBLIC_NAVER_API_KEY,
        'X-Naver-Client-Secret': process.env.NEXT_APP_PUBLIC_NAVER_API_SECRET_KEY,
      },
      params: {
        query: '소사 외과',
        display: 100,
      },
    };
    return Axios(config);
  },
};

// import Axios from 'axios';
// import { GET, JSON_HEADER } from 'shared/api-constant';

// export const news = {
//   getNaverNews: async () => {
//     const config = {
//       method: GET,
//       url: '/api/v1/search/news.json',
//       headers: {
//         ...JSON_HEADER,
//         'X-Naver-Client-Id': 'VAfwS1isCvA27KT8_crv',
//         'X-Naver-Client-Secret': 'BVjLzgu3Qm',
//       },
//       params: {
//         query: '비트코인',
//       },
//     };

//     return Axios(config);
//   },
// };
