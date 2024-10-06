import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../Providers/dataSlice'


const store = configureStore({
    reducer: {
      data: dataReducer,
    },
  });
  
  export default store;