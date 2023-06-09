import { createSlice } from "@reduxjs/toolkit";
const initialState={
  feedData:[]
}
const feedSlice=createSlice({
  name:'feed',
  initialState,
  reducers:{
    getFields:(state,action)=>{
      state.feedData.push(action.payload)
    }
  }
})
export const {getFields}=feedSlice.actions;
export const {reducerFeed}=feedSlice.reducer;