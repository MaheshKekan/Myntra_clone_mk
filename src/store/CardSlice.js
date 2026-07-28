import { createSlice } from "@reduxjs/toolkit";
import { items } from "./item.js";

const cardData = createSlice({
  name: "cardData",
  initialState:[],
  reducers: {
    addToCard: (state, action) => {
      return action.payload;
    }
  },
});

export const cardAction = cardData.actions;
export default cardData;
