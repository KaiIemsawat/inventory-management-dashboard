// How to make api call when using Redux and toolkits

import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({}),
});

export const {} = api;
