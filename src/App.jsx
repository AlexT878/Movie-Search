import MainLayout from "./components/MainLayout";
import moviesData from "./assets/movies.json"
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails"

import { Route, Routes, useSearchParams } from "react-router-dom";
import WatchList from "./components/WatchList";
import useMovies from "./hooks/useMovies";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedMovie = searchParams.get("search") || "";
  const selectedGenre = searchParams.get("genre") || "All Genres";
  const selectedSortOption = searchParams.get("sort") || "Alphabetical: A-Z";
  const sortedMovies=useMovies(moviesData, searchedMovie, selectedGenre, selectedSortOption);

  function updateURL(newFilters) {
    const nextParams = {
      search: searchedMovie,
      genre: selectedGenre,
      sort: selectedSortOption,
      ...newFilters
    }
    if (!nextParams.search) {
      delete nextParams.search;
    }

    if (nextParams.genre === "All Genres") {
      delete nextParams.genre;
    }

    if (nextParams.sort === "Alphabetical: A-Z") {
      delete nextParams.sort;
    }

    setSearchParams(nextParams);
  }

  return (
    <Routes>
      <Route element={
        <MainLayout 
          searchedMovie={searchedMovie}
          setSearchedMovie={(val) => updateURL({ search: val })}
          selectedGenre={selectedGenre}
          setSelectedGenre={(val) => updateURL({ genre: val })}
          selectedSortOption={selectedSortOption}
          setSelectedSortOption={(val) => updateURL({ sort: val })}
        />
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
