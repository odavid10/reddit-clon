import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reddits: [],
  isLoading: false,
};

export const redditsSlice = createSlice({
  name: "reddits",
  initialState,
  reducers: {
    startLoadingReddits: (state) => {
      state.isLoading = true;
    },
    setReddits: (state, action) => {
      state.isLoading = false;
      state.reddits = action.payload;
    },
  },
});

export const { startLoadingReddits, setReddits } = redditsSlice.actions;
