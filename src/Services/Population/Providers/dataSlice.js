
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_URLS from '../../Other/appSettings';
import axios from 'axios';

// Use the API URL from the config file
export const fetchData = createAsyncThunk("data/fetchData", async () => {
    const response = await axios.get(API_URLS.populationData);
    return response.data.data;
  });

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
