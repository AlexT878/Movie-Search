import Header from "./components/Header"
import moviesData from "./assets/movies.json"
import MovieCard from "./components/MovieCard.JSX"
import { useState } from "react"

function App() {
  const [searchedMovie, setSearchedMovie] = useState('');
  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchedMovie.toLowerCase())
  );

  return (
    <>
      <Header searchedMovie={searchedMovie} setSearchedMovie={setSearchedMovie}/>
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
