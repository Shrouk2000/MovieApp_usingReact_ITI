import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: [],
  reducers: {
    addToWatchlist: (state, action) => {
      if (!state.some(movie => movie.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFromWatchlist: (state, action) => {
      return state.filter(movie => movie.id !== action.payload.id);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
