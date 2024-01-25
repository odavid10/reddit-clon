import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const redditsApi = createApi({
  reducerPath: "reddit",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://oauth.reddit.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "authorization",
        "bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzA2MTQ0ODAyLjIyMTc2LCJpYXQiOjE3MDYwNTg0MDIuMjIxNzYsImp0aSI6IlpqeWJrZzN5SE1zWklTc3NPNTk1cUpKcnRMbk43QSIsImNpZCI6IjZmTVVpV2hqYU56dk5vY1VrT19XSUEiLCJsaWQiOiJ0Ml9zb3pwbm1zaDYiLCJhaWQiOiJ0Ml9zb3pwbm1zaDYiLCJsY2EiOjE3MDYwNDAxMDY0MjAsInNjcCI6ImVKeUtWdEpTaWdVRUFBRF9fd056QVNjIiwiZmxvIjo5fQ.UVj3hqr46T7Vmb4dpTXz0_Hc11Pc4Xbv1NVk5TZIyDP088fj-odH8USvx0s_DUNyf6uBjUQCQg2c-796EvLmm9vSri_6JsneJQdqmuFfVks3auYmWEtDq9rB7_oR5hzOi5bDQ587_Zqb6x_yFjIzenQdevXovbUc54ptEp5pnAmxtNPXFOT-jBW2zd8_1L0CjH7z1bTKKu-S0_lQ2FFSmWwPKwZrKLz1cPutBQD5d2-IRuxiYLiWL_KNvM4xQWjQ_PIqqLHHlq8prdLUsl4aTUqBmfkoltVolkFoqxPwkp0bFg_tkg-Ps6kxSgofYcFBOH9i-XIg2C_ch5admOIE0w"
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
