import { configureStore } from '@reduxjs/toolkit';
import colorReducer from '../provider/colorSilce';

const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});

export default store;
