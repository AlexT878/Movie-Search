import { createSlice } from '@reduxjs/toolkit';

function loadWatchListFromStorage() {
    try {
        const data = localStorage.getItem('my-watchlist');
        if (data === null) {
            console.log("Local storage is empty!");
            return [];
        }

        const parsedData = JSON.parse(data);
        if(!Array.isArray(parsedData)) {
            console.log("Watchlist is not an array!");
            return [];
        }

        return parsedData;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: loadWatchListFromStorage,
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