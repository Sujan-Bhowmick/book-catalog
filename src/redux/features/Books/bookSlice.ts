import {  createSlice } from "@reduxjs/toolkit";

// export interface bookState {
//  books: array
// }

const initialState = {
  books: []
}

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    // push: (state, action: PayloadAction<object>) => {
    //   state.books = 
    // }
  }
})