import {useDispatch} from 'react-redux';
import {apiSlice} from './apiSlice';
import {QUERY_TAGS} from '../../utils/Status';
const BASE_URL = `/state`;
export const stateApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addState: builder.mutation({
      query: payload => ({
        url: `${BASE_URL}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.STATE],
    }),
    updateState: builder.mutation({
      query: payload => ({
        url: `${BASE_URL}/${payload._id}`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.STATE],
    }),
    getState: builder.query({
      query: id => ({
        url: `${BASE_URL}/${id}`,
        method: 'GET',
      }),
      transformResponse: response => {
        return response.data;
      },
      providesTags: [QUERY_TAGS.STATE],
      async onQueryStarted(id, {dispatch, queryFulfilled}) {},
    }),
    getStates: builder.query({
      query: params => ({
        url: `${BASE_URL}`,
        method: 'GET',
        params: params,
      }),
      transformResponse: response => response.data,
      providesTags: [QUERY_TAGS.STATE],
    }),
    deleteState: builder.mutation({
      query: id => ({
        url: `${BASE_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [QUERY_TAGS.STATE],
    }),
  }),
});

export const {
  useAddStateMutation,
  useUpdateStateMutation,
  useGetStatesQuery,
  useDeleteStateMutation,
} = stateApi;
