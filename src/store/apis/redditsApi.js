import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const redditsApi = createApi({
  reducerPath: "reddit",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://oauth.reddit.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "authorization",
        "bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzA2MjMyNjY4LjY5MjgwOSwiaWF0IjoxNzA2MTQ2MjY4LjY5MjgwOSwianRpIjoiMklTQy1UU0hiazVNRVZvOTcxaE1KTjR6V2U2bmZnIiwiY2lkIjoiNmZNVWlXaGphTnp2Tm9jVWtPX1dJQSIsImxpZCI6InQyX3NvenBubXNoNiIsImFpZCI6InQyX3NvenBubXNoNiIsImxjYSI6MTcwNjA0MDEwNjQyMCwic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.I0IQRx-hTqPUrkG72VUAFbxutNBFJKvPDirdEB691WTAvou8craVhyrD7c61J3LUEI8L_PS0ZjJfBarHFWaJdLHc79187vz1hi8muQO4Gcm8c1OgfoIUY6SIOWjNMj-g-E8TrfdDuN_dv-SzsL7RXLaTIeF7MCOe8A1Mhd2-0yftT5o1VakGrJm6DvSzL536b_egsP8g_yj4BUyiVswvj9SAsc9fac9PJhjQ-5nKMGyKtmY45nVv1cguAMyt9lW9THLUs6z-GNTBRpOlPy865A1-EM013yfThQpCMmLOPYpJ-R0qyzz2QAmW2AeLBIS4cIGuzC6gXmJ39t2p14nfcA"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBests: builder.query({
      query: (limit = 5) => `/best?limit=${limit}`,
    }),
    getHots: builder.query({
      query: (subreddit = "apple") => `/r/${subreddit}/hot?limit=5`,
    }),
    getNews: builder.query({
      query: (subreddit = "sony") => `/r/${subreddit}/new?limit=5`,
    }),
    getRisings: builder.query({
      query: (subreddit = "amazon") => `/r/${subreddit}/rising?limit=5`,
    }),
  }),
});

export const {
  useGetBestsQuery,
  useGetHotsQuery,
  useGetNewsQuery,
  useGetRisingsQuery,
} = redditsApi;
