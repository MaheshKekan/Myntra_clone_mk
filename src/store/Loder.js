import { createSlice } from "@reduxjs/toolkit";

const Loder = createSlice({
  name: "Loder",
  initialState: false,
  reducers: {
    startLoading: () => {
      return true;
    },
    endLoading: () => {
      return false;
    },
  },
});

export const loderaction = Loder.actions;
export default Loder;