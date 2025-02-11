import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import {API_BASE_URL} from '@env';
import {QUERY_TAGS} from '../../utils/Status';
import {API_URL} from '../../utils/constants';
// import AxiosBaseQuery from '../../utils/AxiosBaseQuery';
const axiosBaseQuery =
  ({baseUrl} = {baseUrl: ''}) =>
  async ({url, method, body: data, params}, api) => {
    const headers = {};
    const app = api.getState().app;
    if (app?.accessToken) {
      headers['Authorization'] = `Bearer ${app?.accessToken}`;
    }
    if (method === 'POST' || method === 'PUT') {
      if (data instanceof FormData) {
        headers['Content-Type'] = 'multipart/form-data';
      } else {
        headers['Content-Type'] = 'application/json';
      }
    }
    // console.log(
    //   'URL :',
    //   baseUrl + url,
    //   ' Method :',
    //   method,
    //   ' Data : ',
    //   data,
    //   ' Params : ',
    //   params,
    //   'Headers : ',
    //   headers,
    // );
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return {data: result.data};
    } catch (err) {
      // const originalRequest = err.config;
      // if (err.response?.status === 401 && !originalRequest._retry) {
      //   originalRequest._retry = true;
      //   const refreshedToken = await attemptTokenRefresh(user?.refreshToken);
      //   // If the token refresh is successful, retry the original request
      //   if (refreshedToken) {
      //     originalRequest.headers['Authorization'] = `Bearer ${refreshedToken}`;
      //     return axios(originalRequest);
      //   }
      // }
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
const attemptTokenRefresh = async refreshToken => {
  try {
    const response = await axios.post('YOUR_REFRESH_ENDPOINT', {
      refresh_token: refreshToken,
    });
    const newAccessToken = response.data.access_token;
    return newAccessToken;
  } catch (error) {
    console.error('Token refresh failed:', error);
    return null;
  }
};
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: `${API_URL}/client/v1`,
  }),
  // global configuration for the api
  // refetchOnMountOrArgChange: 30,
  // refetchOnReconnect: true,
  // keepUnusedDataFor: 30,
  tagTypes: [
    QUERY_TAGS.AUTH,
    QUERY_TAGS.CITY,
    QUERY_TAGS.COMPLAINT,
    QUERY_TAGS.CATEGORY,
  ],
  endpoints: builder => ({}),
});

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({
    baseUrl: `${API_URL}/auth/client`,
  }),
  tagTypes: [QUERY_TAGS.AUTH],
  endpoints: builder => ({}),
});
