import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakestoreApi = createApi({
  reducerPath: "fakestoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = fakestoreApi;