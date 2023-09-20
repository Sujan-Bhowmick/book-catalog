import {  PayloadAction, createSlice } from "@reduxjs/toolkit";

 interface IBook {
  search: string
 }

const initialState: IBook = {
  search : ""
}

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searching: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    }
  }
});

export const {searching} = bookSlice.actions;
export default bookSlice.reducer;