import Header from "./components/Header"
import moviesData from "./assets/movies.json"
import MovieCard from "./components/MovieCard.JSX"

function App() {
  return (
    <>
      <Header />
      {console.log(moviesData)}
      <main className="main-content"> 
        <div className="movie-grid">
          {moviesData.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
