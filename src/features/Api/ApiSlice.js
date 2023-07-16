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
        addProduct: builder.mutation({
            query: (data) => ({
                url: `/products`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['products']
        })
    }),


});

export const { useGetProductsQuery, useAddProductMutation } = apiSlice