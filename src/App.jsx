import Header from "./components/Header"
import moviesData from "./assets/movies.json"
import MovieCard from "./components/MovieCard.JSX"
import { useState } from "react"

function App() {
  const [searchedMovie, setSearchedMovie] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres')

  const filteredMovies = moviesData.filter((movie) => {
    const matchesName = movie.title.toLowerCase().includes(searchedMovie.toLowerCase())
    const matchesGenre = selectedGenre === "All Genres" || selectedGenre.toLowerCase() === movie.genre;
    
    return matchesName && matchesGenre;
  });

  return (
    <>
      <Header searchedMovie={searchedMovie} setSearchedMovie={setSearchedMovie} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
      <main className="main-content"> 
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
