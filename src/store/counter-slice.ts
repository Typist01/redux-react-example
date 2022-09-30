/** @format */

// DUCKS

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CoutnerState {
  value: number;
}

const initialState: CoutnerState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    incremented(state) {
      // It's okay to do this because immer makes it immutable under the hood
      state.value++;
    },
    // decrement
    // reset
  },
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
