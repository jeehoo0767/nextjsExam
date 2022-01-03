import Axios, { AxiosRequestConfig } from 'axios';
import { GET, JSON_HEADER } from 'shared/api-constant';

export const news = {
  getNaverNews: async () => {
    const config: AxiosRequestConfig = {
      method: GET,
      url: 'https://openapi.naver.com/v1/search/news.json',
      headers: {
        ...JSON_HEADER,
        'X-Naver-Client-Id': 'iPm3lPnekLU9Fmkhj6m2',
        'X-Naver-Client-Secret': 'cHh27Neul5',
      },
      params: {
        query: '삼성전자',
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
