import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedColor: "#40E0D0", 
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.selectedColor = action.payload; 
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
