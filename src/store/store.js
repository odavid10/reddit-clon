// thrid-party
import { configureStore } from "@reduxjs/toolkit";

// project imports
import { redditsSlice } from "./slices/reddits";
import { redditsApi } from "./apis/redditsApi";

export const store = configureStore({
  reducer: {
    reddits: redditsSlice.reducer,
    [redditsApi.reducerPath]: redditsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(redditsApi.middleware),
});
