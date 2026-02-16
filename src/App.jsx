import Header from "./components/Header"
import moviesData from "./assets/movies.json"
import MovieCard from "./components/MovieCard.JSX"
import { useState } from "react"

function App() {
  const [searchedMovie, setSearchedMovie] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres')
  const [selectedSortOption, setSelectedSortOption] = useState('Alphabetical: A-Z')

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

  return (
    <>
      <Header 
        searchedMovie={searchedMovie} 
        setSearchedMovie={setSearchedMovie} 
        selectedGenre={selectedGenre} 
        setSelectedGenre={setSelectedGenre}
        selectedSortOption={selectedSortOption}
        setSelectedSortOption={setSelectedSortOption}
      />
      <main className="main-content"> 
        <div className="movie-grid">
          {sortedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
