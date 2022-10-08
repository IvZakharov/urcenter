import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  pages: [],
  info: {},
  status: '',
};

export const fetchData = createAsyncThunk('pizzas/fetchPizzasStatus', async () => {
  const { data } = await axios.get(
    'https://dolphin-app-fpmlu.ondigitalocean.app/api/categories?populate=*',
  );
  console.log('restart');
  return data;
});

const dataSlice = createSlice({
  name: 'stepsCount',
  initialState,
  reducers: {
    setItems(state, action) {
      state.pages = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = 'loading';
      state.pages = [];
      state.info = {};
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.pages = action.payload;
    });

    builder.addCase(fetchData.rejected, (state) => {
      state.status = 'failed';
      state.pages = [];
      state.info = {};
    });
  },
});

export const { setItems } = dataSlice.actions;

export default dataSlice.reducer;
