import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter_slice.js'
import userReducer from "./userSlice.js";


const store=configureStore({
    reducer:{
        counter:counterReducer,
        user : userReducer
    }
});

export default store;