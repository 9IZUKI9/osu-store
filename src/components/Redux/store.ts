import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Cart/slice.js';
import filtersReducer from '../Cart/slice.js'

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;
