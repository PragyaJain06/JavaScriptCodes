import { configureStore } from "@reduxjs/toolkit";
import  userDetails  from "../features/userDetailsSlice";

const store= configureStore({
    reducer:{
        firstReducer: userDetails
    }
});
export default store;