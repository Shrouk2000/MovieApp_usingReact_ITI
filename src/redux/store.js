import { configureStore } from '@reduxjs/toolkit';
import watchlistReducer from './slices/watchListSlice';

const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});

export default store;
