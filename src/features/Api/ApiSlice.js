import {createApi, fetchBaseQuery}  from  '@reduxjs/toolkit/query/react'

export const apiSlice =  createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : fetch(`http://localhost:9000/`)
    }),
    endpoints : (builder) =>{

    }
})