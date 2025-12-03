import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type FiltersResponse, type Country, type Genre } from "../types/filters";

interface MovieItem {
  kinopoiskId: number;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  year: number;
  ratingKinopoisk?: number;
}
interface MovieResponse {
  total: number;
  totalPages: number;
  items: MovieItem[];
}
interface MovieById {
  kinopoiskId: number;
  nameRu: string;
  description: string;
  shortDescription: string;
  posterUrl: string;
  year: string;
  genres: Genre[];
  ratingKinopoisk: string;
  countries: Country[];

}

const apiUrl = import.meta.env.VITE_API_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", apiKey);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieResponse, void>({
      query: () => "/films/collections",
    }),
    getMovieById: builder.query<MovieById, number>({
      query: (id) => `films/${id}`,
    }),
    getShows: builder.query<MovieResponse, void>({
      query: () => "/films",
    }),
    getFilters: builder.query<FiltersResponse, void>({
      query: () => '/films/filters'
    }),
    getFilteredMovies: builder.query({
      query: ({genreId, countryId, year, rating, page = 1}) => {
        const params = new URLSearchParams()

        if(genreId) params.append('genres', genreId)
        if(countryId) params.append('countries', countryId)
        if(year){
          params.append('yearForm', year)
          params.append('yearTo', year)
        }
        if(rating) params.append('ratingForm', rating)

        
        params.append('page', String(page))
        params.append('order', 'RATING')

        return `/films?${params.toString()}`
      }
    }),
    getMovieBySearch: builder.query<MovieResponse, string>({
      query: (search) => `/films?keyword=${encodeURIComponent(search)}&page=1`
    })
  }),
});

export const {
  useGetMoviesQuery, 
  useGetMovieByIdQuery, 
  useGetShowsQuery, 
  useGetFiltersQuery, 
  useGetFilteredMoviesQuery,
  useGetMovieBySearchQuery, 
} =
  api;
