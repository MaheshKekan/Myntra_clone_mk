import {createSlice} from "@reduxjs/toolkit"
const bagData=createSlice({
    name:"bagData",
    initialState:[],
    reducers:{
        addToBag:(state,action)=>{
            state.push(action.payload);
        },
        removeFromBag:(state,action)=>{
            const newState=state.filter( itemId=>itemId !== action.payload);
            return newState;
        }
    }
})
export const bagAction=bagData.actions;
export default bagData;