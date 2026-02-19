import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: JSON.parse(localStorage.getItem('my-watchlist')) || [],
  reducers: {
    toggleWatchlist: (state, action) => {
      const movie = action.payload;
      const index = state.findIndex(m => m.id === movie.id);

      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(movie);
      }
      
      localStorage.setItem('my-watchlist', JSON.stringify(state));
    },
  },
});

export const { toggleWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;