import { apiSlice } from '../../app/api/authApi';

export const productApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllProduct'],
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: ({search}) => {
        return {
        url: `/product/?search=${search ? search : ""}`,
      }},

      providesTags: ['getAllProduct'],
      transformResponse: (response, meta, args) => response.data,
    }), 
    getProductById: builder.query({
      query: (id) => ({
        url: `/product/detail/${id}`,
      }),

      providesTags: ['getAllProduct'],
      transformResponse: (response, meta, args) => response.data[0],
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: `/product`,
        method: "POST",
        body: data
      }),

      providesTags: ['getAllProduct', 'getAllProduct'],
      invalidatesTags: ['getAllProduct', 'getAllProduct'],
      transformResponse: (response, meta, args) => response.data,
    }), 
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `product/delete/${id}`,
        method: "DELETE",
      }),

      providesTags: ['getAllProduct'],
      invalidatesTags: ['getAllProduct'],
      transformResponse: (response, meta, args) => response.data,
    }), 
    updateProductById: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/product/update/${id}`,
          method: 'PUT',
          body: data,
        };
      },
      invalidatesTags: ['getAllProduct'],
      transformResponse: (response, meta, args) => response,
    }),
  }),
});

export const { useGetAllProductQuery, useCreateProductMutation, useUpdateProductByIdMutation, useGetProductByIdQuery , useDeleteProductMutation} = productApi;