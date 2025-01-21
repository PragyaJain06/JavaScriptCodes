import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import userDetails1 from "./userDetails1";


const store= configureStore({
reducer:{
    firstReducer: userDetails1
}
})