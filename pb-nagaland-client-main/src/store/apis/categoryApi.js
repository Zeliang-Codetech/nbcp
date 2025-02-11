import {useDispatch} from 'react-redux';
import {apiSlice} from './apiSlice';
import {QUERY_TAGS} from '../../utils/Status';
const BASE_URL = `/category`;
export const categoryApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addCategory: builder.mutation({
      query: payload => ({
        url: `${BASE_URL}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.CATEGORY],
    }),
    updateCategory: builder.mutation({
      query: payload => ({
        url: `${BASE_URL}/${payload._id}`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: [QUERY_TAGS.CATEGORY],
    }),
    getCategory: builder.query({
      query: id => ({
        url: `${BASE_URL}/${id}`,
        method: 'GET',
      }),
      transformResponse: response => {
        return response.data;
      },
      providesTags: [QUERY_TAGS.CATEGORY],
      async onQueryStarted(id, {dispatch, queryFulfilled}) {},
    }),
    getCategories: builder.query({
      query: params => ({
        url: `${BASE_URL}`,
        method: 'GET',
        params: params,
      }),
      transformResponse: response => response.data,
      providesTags: [QUERY_TAGS.CATEGORY],
    }),
    deleteCategory: builder.mutation({
      query: id => ({
        url: `${BASE_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [QUERY_TAGS.CATEGORY],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
} = categoryApi;
