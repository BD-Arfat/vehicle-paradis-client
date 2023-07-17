import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:9000`
    }),
    tagTypes: ['products'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
            providesTags: ['products']
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
            invalidatesTags : ['products']
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: `/products`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['products']
        }),
        editProduct: builder.mutation({
            query: ({id, data}) => ({
                url: `/products/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['products']
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['products']
        })
    }),


});

export const { useGetProductsQuery, useAddProductMutation, useGetProductQuery, useDeleteProductMutation, useEditProductMutation } = apiSlice