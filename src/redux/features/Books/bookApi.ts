import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Post {
  title: string;
  author: string;
  genre: string;
  image: string;
  publicationDate: string;
}

export const bookApi = createApi({
  reducerPath: "bookApi",
  tagTypes:["books"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => `/book`,
      providesTags: ["books"]
    }),
    getBookById: builder.query({
      query: (id) => `book/${id}`,
    }),
    createBook: builder.mutation<Post, Partial<Post>>({
      query: (data) => ({
        url: `/book/create-book`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["books"]
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"]
    })
  }),
});

export const { useGetBookQuery, useGetBookByIdQuery , useCreateBookMutation, useDeleteBookMutation} = bookApi;
