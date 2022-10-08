import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pages: [],
};

const dataSlice = createSlice({
  name: 'stepsCount',
  initialState,
  reducers: {
    setItems(state, action) {
      state.pages = action.payload;
    },
  },
});

export const { setItems } = dataSlice.actions;
export default dataSlice.reducer;
