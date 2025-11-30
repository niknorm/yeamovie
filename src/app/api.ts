import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.poiskkino.dev/v1.4",
        prepareHeaders: (headers) => {
            headers.set('X-API-KEY', '')
            return headers
        },
    }),
    endpoints: (builder) => ({
        getRandomMovie: builder.query({
            query: () => '/movie/random',
        }),
    }),
})

export const {useGetRandomMovieQuery} = api