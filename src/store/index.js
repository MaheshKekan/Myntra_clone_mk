import { configureStore } from "@reduxjs/toolkit";
import cardData from "./CardSlice";
import bagData from "./Bag";
import Loder from "./Loder";

const store= configureStore({
    reducer: {
        cardData: cardData.reducer,
        bagData:bagData.reducer,
        Loder:Loder.reducer,
    }
})

export default store;