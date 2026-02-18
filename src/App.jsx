import MainLayout from "./components/MainLayout";
import moviesData from "./assets/movies.json"
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails"

import { Route, Routes, useSearchParams } from "react-router-dom";
import WatchList from "./components/WatchList";
import useLocalStorage from "./utils/useLocalStorage";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedMovie = searchParams.get("search") || "";
  const selectedGenre = searchParams.get("genre") || "All Genres";
  const selectedSortOption = searchParams.get("sort") || "Alphabetical: A-Z";
  const [watchlist, setWatchlist] = useLocalStorage("my-watchlist", []);

  function addToWatchlist(movie) {
    if(watchlist.includes(movie)) {
      setWatchlist(watchlist.filter(element => element.id !== movie.id));
    } else {
      setWatchlist([...watchlist, movie]);
    }
  }

  const filteredMovies = moviesData.filter((movie) => {
    const matchesName = movie.title.toLowerCase().includes(searchedMovie.toLowerCase())
    const matchesGenre = selectedGenre === "All Genres" || selectedGenre.toLowerCase() === movie.genre;
    
    return matchesName && matchesGenre;
  });

  const sortedMovies = filteredMovies.sort((a, b) => {
    if (selectedSortOption === "Rating: High to Low") return b.rating - a.rating;
    if (selectedSortOption === "Rating: Low to High") return a.rating - b.rating;
    if (selectedSortOption === "Alphabetical: A-Z") return a.title.localeCompare(b.title);
    if (selectedSortOption === "Alphabetical: Z-A") return b.title.localeCompare(a.title);

    return 0;
  })

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
              addToWatchlist={() => addToWatchlist(movie)}
              isWatchListed={watchlist.some(item => item.id === movie.id)}
              />)}
          </div>
        }/>
        <Route path="/movies/:id" element={<MovieDetails addToWatchlist={(movie) => addToWatchlist(movie)} watchlist={watchlist}/>}/>

        <Route path="/watchlist" element={<WatchList watchlist={watchlist} addToWatchlist={addToWatchlist}/>} />
        
      </Route>

    </Routes>
  );
}

export default App
