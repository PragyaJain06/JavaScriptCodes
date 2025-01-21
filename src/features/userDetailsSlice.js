import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Update from "../components/Update";
import { json } from "react-router-dom";

// create action

export const createUser= createAsyncThunk("user", async(data,{rejectWithValue})=>{
// call api here
const response = await fetch('https://666c905649dbc5d7145e7256.mockapi.io/crud',{
    method:'POST',
    headers:{
        "content-type":"application/json"
    },
    body: JSON.stringify(data)
})
try{
if(!response.ok){
    throw new Error("error while fetching the data")
   
}else{
    const data = await response.json();
    console.log(data,"data is fetched successfully")
    return data;
}
}
catch(error){
return rejectWithValue(error.message)
}
})

export const readUser= createAsyncThunk("readUser",async(args,{rejectWithValue})=>{
    const response= await fetch('https://666c905649dbc5d7145e7256.mockapi.io/crud',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
try{
    if(!response.ok){
        throw new Error('error while reading the user')
    }
    const data = await response.json();
return data;
}
catch(error){
    return rejectWithValue(error.message);
}
})

export const deleteUser=createAsyncThunk("deleteUser",async(id,{rejectWithValue})=>{
  const response = await fetch(`https://666c905649dbc5d7145e7256.mockapi.io/crud/${id}`,{
    method:'DELETE'
  })
  try{
if(!response.ok){
  throw new Error("delete oepration could not be perfomed")
}
const data= await response.json();
return data;
  }catch(error){
return rejectWithValue(error.message);
  }
})

export const updateUser= createAsyncThunk("updateUser",async(data,{rejectWithValue})=>{
const response= await fetch(`https://666c905649dbc5d7145e7256.mockapi.io/crud/${data.id}`,{
  method:'PUT',
  headers:{
    'content-type':'application/json'
  },
  body: JSON.stringify(data)
})
try{
  if(!response.ok){
    throw new Error("error while updating the data")
  }
  const data= await response.json();
  return data;
}catch(error){
  return rejectWithValue(error.message)
}
})
// export const userDetails= createSlice({
// name: 'userDetails',
// initialState:{
//     users:[],
//     loading:false,
//     error:null
// },
// reducers: {},
// extraReducers:(builder)=>{
//     builder.addCase(createUser.pending,(state)=>{
//         state.loading= true,
//         state.error=null
//     })
//     .addCase(createUser.fulfilled,(state,action)=>{
//         state.loading=false,
//         state.users.push(action.payload)
//     })
//     .addCase(createUser.rejected,(state,action)=>{
//         state.loading=false,
//         state.error= action.payload
//     })
    

// }
// })

// export const userDetails = createSlice({
//     name: 'userDetails',
//     initialState: {
//         users: [],
//         loading: false,
//         error: null
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(createUser.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(createUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users.push(action.payload);
//             })
//             .addCase(createUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })
//             .addCase(readUser.pending, (state)=>{
//                 state.loading= true
//             })
//             .addCase(readUser.fulfilled,(state, action)=>{
//                 state.loading= false,
//                 state.users= action.payload
//             })
//             .addCase(readUser.rejected,(state,action)=>{
//                 state.loading= false,
//                 state.error = action.payload
//             })

//     }
// });

export const userDetails = createSlice({
    name: 'userDetails',
    initialState: {
      users: [],
      loading: false,
      error: null,
      search:[]
    },
    reducers: {
      searchUser:(state,action)=>{
        console.log(action.payload,"search")
        state.search= action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(createUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createUser.fulfilled, (state, action) => {
          state.loading = false;
          state.users.push(action.payload);
        })
        .addCase(createUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(readUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(readUser.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
        })
        .addCase(readUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(deleteUser.pending, (state)=>{
          state.loading= true;
        
        })
        .addCase(deleteUser.fulfilled,(state,action)=>{
          state.loading= false;
          const {id}= action.payload;
          if(id){
         state.users=state.users.filter((item)=> item.id!==id)
          }
          console.log(state.users)
        })
        .addCase(deleteUser.rejected, (state,action)=>{
          state.loading=false;
          state.error= action.payload;
        })
        .addCase(updateUser.pending,(state)=>{
          state.loading= true;
        })
        .addCase(updateUser.fulfilled,(state,action)=>{
          state.loading=false;
          state.users= state.users.map((item)=>{
            console.log(item,"item")
           return item.id === action.payload.id ? action.payload: item
        });
        })
        .addCase(updateUser.rejected, (state,action)=>{
          state.loading= false;
          state.error= action.payload;
        })
    }
  });
  export const {searchUser}= userDetails.actions;
export default userDetails.reducer;
