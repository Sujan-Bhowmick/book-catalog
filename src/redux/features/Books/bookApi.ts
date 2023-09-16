import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => `/book`,
    }),
    getBookById: builder.query({
      query: (id) => `/book-details/${id}`,
    }),
  }),
});

export const { useGetBookQuery, useGetBookByIdQuery } = bookApi;
