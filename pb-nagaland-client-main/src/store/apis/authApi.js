import {useDispatch} from 'react-redux';
import {authApiSlice} from './apiSlice';
import {QUERY_TAGS} from '../../utils/Status';
const BASE_URL = ``;
export const authApi = authApiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: payload => ({
        url: `/login`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.AUTH],
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: 'POST',
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: `/`,
        method: 'GET',
      }),
      transformResponse: response => response.data,
      keepUnusedDataFor: 0,
    }),
    sendOtp: builder.mutation({
      query: payload => ({
        url: `/otp/send`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.AUTH],
    }),
    verifyOtp: builder.mutation({
      query: payload => ({
        url: `/otp/verify`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.AUTH],
    }),
    updateProfile: builder.mutation({
      query: payload => ({
        url: `/profile`,
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.AUTH],
    }),
    getAppVersion: builder.query({
      query: () => ({
        url: `/app/version`,
        method: 'GET',
      }),
      // transformResponse: response => response.data,
      keepUnusedDataFor: 0,
    }),
    updateFcmToken: builder.mutation({
      query: () => ({
        url: `/fcm`,
        method: 'PUT',
        body: payload,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetUserQuery,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUpdateProfileMutation,
  useGetAppVersionQuery,
  useUpdateFcmTokenMutation,
} = authApi;
