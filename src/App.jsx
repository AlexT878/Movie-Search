import MainLayout from "./components/MainLayout";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails"

import { Route, Routes } from "react-router-dom";
import WatchList from "./components/WatchList";
import useMovies from "./hooks/useMovies";
import useMovieFilters from "./hooks/useMovieFilters";
import useSimulateFetch from "./hooks/useSimulateFetch";
import { MESSAGES } from "./constants/strings";

function App() {
  const searchParams = useMovieFilters();

  const { movies, isLoading } = useSimulateFetch();
  const sortedMovies=useMovies(movies, searchParams.search, searchParams.genre, searchParams.sort);

  return (
    <Routes>
      <Route element={
        <MainLayout />
      }>
        
        <Route path="/" element={
          isLoading ? (
            <div className="loading-state">{MESSAGES.LOADING}</div>
          ) : (
            <div className="movie-grid">
              {sortedMovies.map(movie => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie} 
                  className={"card-link"} 
                />
              ))}
            </div>
          )
        }/>

        <Route path="/movies/:id" element={<MovieDetails />}/>

        <Route path="/watchlist" element={<WatchList />} />
        
      </Route>

    </Routes>
  );
}

export default App
