

import { createSlice } from "@reduxjs/toolkit";

// all you nead to creat slice it will creat actions and readucers it self
const initialState = {
    items: [],
}

export const loginSlice = createSlice({

    name: '',
    initialState,
    reducers: 
    {

    }
});

export default loginSlice.reducer;