import MainLayout from "./components/MainLayout";
import moviesData from "./assets/movies.json"
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails"

import { Route, Routes } from "react-router-dom";
import WatchList from "./components/WatchList";
import useMovies from "./hooks/useMovies";
import useMovieFilters from "./hooks/useMovieFilters";

function App() {
  const searchParams = useMovieFilters();

  const sortedMovies=useMovies(moviesData, searchParams.search, searchParams.genre, searchParams.sort);

  return (
    <Routes>
      <Route element={
        <MainLayout />
      }>
        
        <Route path="/" element={
          <div className="movie-grid">
            {sortedMovies.map(movie => <MovieCard 
              key={movie.id} 
              movie={movie} 
              className={"card-link"} 
              />)}
          </div>
        }/>
        <Route path="/movies/:id" element={<MovieDetails />}/>

        <Route path="/watchlist" element={<WatchList />} />
        
      </Route>

    </Routes>
  );
}

export default App
