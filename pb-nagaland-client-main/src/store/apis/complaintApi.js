import {useDispatch} from 'react-redux';
import {apiSlice} from './apiSlice';
import {QUERY_TAGS} from '../../utils/Status';
const BASE_URL = `/complaint`;
export const complaintApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addComplaint: builder.mutation({
      query: payload => ({
        url: `${BASE_URL}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.COMPLAINT],
    }),
    updateComplaint: builder.mutation({
      query: payload => ({
        url: `${BASE_URL}/${payload._id}`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.COMPLAINT],
    }),
    getComplaint: builder.query({
      query: id => ({
        url: `${BASE_URL}/${id}`,
        method: 'GET',
      }),
      transformResponse: response => {
        return response.data;
      },
      providesTags: [QUERY_TAGS.COMPLAINT],
      async onQueryStarted(id, {dispatch, queryFulfilled}) {},
    }),

    getComplaints: builder.query({
      query: params => ({
        url: `${BASE_URL}`,
        method: 'GET',
        params: params,
      }),
      transformResponse: response => response.data,
      providesTags: [QUERY_TAGS.COMPLAINT],
    }),
    deleteComplaint: builder.mutation({
      query: id => ({
        url: `${BASE_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [QUERY_TAGS.COMPLAINT],
    }),
  }),
});

export const {
  useAddComplaintMutation,
  useUpdateComplaintMutation,
  useDeleteComplaintMutation,
  useGetComplaintQuery,
  useGetComplaintsQuery,
} = complaintApi;
