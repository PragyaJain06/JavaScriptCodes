import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const createUser= createAsyncThunk("create",async(data,{rejctedWithValue})=>{
    
})
export const userDetails1= createSlice({
    name:"userDetails1",
    initialState:{
        error:null,
        loading:false,
        users:[]
    },
    reducers:{},
    
})

export default userDetails1.reducer;
