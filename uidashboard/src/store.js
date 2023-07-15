import { configureStore } from '@reduxjs/toolkit'
import { loginSlice } from './reducesrs/loginStatus';
export const store = configureStore({
    
reducer: {
    loginstatus: loginSlice,
}


});

