import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApiCall = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://fake-coffee-api.vercel.app/api");
  const data = await response.json();
  return data;
});
const dataSlice = createSlice({
  name: "data",
  initialState: {
    status: "idle",
    error: "",
    items: [],
    filterData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiCall.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchApiCall.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.filterData = action.payload.flatMap((ele) => ele?.flavor_profile);
      })
      .addCase(fetchApiCall.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default dataSlice.reducer;
