import {useDispatch} from 'react-redux';
import {apiSlice} from './apiSlice';
import {QUERY_TAGS} from '../../utils/Status';
const BASE_URL = `/city`;
export const cityApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addCity: builder.mutation({
      query: payload => ({
        url: `${BASE_URL}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.CITY],
    }),
    updateCity: builder.mutation({
      query: payload => ({
        url: `${BASE_URL}/${payload._id}`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.CITY],
    }),
    getCity: builder.query({
      query: id => ({
        url: `${BASE_URL}/${id}`,
        method: 'GET',
      }),
      transformResponse: response => {
        return response.data;
      },
      providesTags: [QUERY_TAGS.CITY],
      async onQueryStarted(id, {dispatch, queryFulfilled}) {},
    }),
    getCities: builder.query({
      query: params => ({
        url: `${BASE_URL}`,
        method: 'GET',
        params: params,
      }),
      transformResponse: response => response.data,
      providesTags: [QUERY_TAGS.CITY],
    }),
    getCity: builder.query({
      query: id => ({
        url: `${BASE_URL}/${id}`,
        method: 'GET',
      }),
      transformResponse: response => response.data,
      providesTags: [QUERY_TAGS.CITY],
    }),
    deleteCity: builder.mutation({
      query: id => ({
        url: `${BASE_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [QUERY_TAGS.CITY],
    }),
  }),
});

export const {
  useAddCityMutation,
  useUpdateCityMutation,
  useGetCitiesQuery,
  useGetCityQuery,
  useDeleteCityMutation,
} = cityApi;
