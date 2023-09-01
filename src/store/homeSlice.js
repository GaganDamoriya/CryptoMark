import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    coins: [],
  },
  reducers: {
    getCoins: (state, action) => {
      state.coins = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCoins } = homeSlice.actions;

export default homeSlice.reducer;
