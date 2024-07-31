import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./chemicalSlice";
const store =configureStore({
    reducer:{
        chemicals: listReducer
    }
})
export default store;