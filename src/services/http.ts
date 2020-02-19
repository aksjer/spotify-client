import axios, { AxiosRequestConfig } from 'axios';
interface Http {
  post: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ) => Promise<any>;
}

export const http: Http = {
  post: function(
    data?: any,
    config?: AxiosRequestConfig | undefined
  ): Promise<any> {
    return axios.post(`${process.env.REACT_APP_SERVER_URL}/graphql`, data, {
      headers: {
        'content-type': 'application/json',
        authorization: sessionStorage.getItem('access_token'),
        ...config?.headers
      }
    });
  }
};
