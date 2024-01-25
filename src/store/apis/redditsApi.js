import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// project imports
import { ACCESS_TOKEN, BASE_URL } from "../../enviroment";

export const redditsApi = createApi({
  reducerPath: "reddit",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("authorization", `bearer ${ACCESS_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBests: builder.query({
      query: (limit = 5) => `/best?limit=${limit}`,
    }),
    getHots: builder.query({
      query: (subreddit) =>
        subreddit === ""
          ? `/r/apple/hot?limit=5`
          : `/r/${subreddit}/hot?limit=5`,
    }),
    getNews: builder.query({
      query: (subreddit) =>
        subreddit === ""
          ? `/r/sony/new?limit=5`
          : `/r/${subreddit}/new?limit=5`,
    }),
    getRisings: builder.query({
      query: (subreddit) =>
        subreddit === ""
          ? `/r/amazon/rising?limit=5`
          : `/r/${subreddit}/rising?limit=5`,
    }),
  }),
});

export const {
  useGetBestsQuery,
  useGetHotsQuery,
  useGetNewsQuery,
  useGetRisingsQuery,
} = redditsApi;
