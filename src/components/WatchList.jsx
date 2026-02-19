import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";
import useMovieFilters from "../hooks/useMovieFilters";

export default function WatchList() {
    const watchlist = useSelector((state) => state.watchlist);
    const searchParams = useMovieFilters();

    const watchlistSorted = useMovies(watchlist, searchParams.search, searchParams.genre, searchParams.sort);

    return (
        <div className="movie-grid">
            {watchlistSorted.map(movie => (
                <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                    className="card-link" 
                />
            ))}
        </div>
    );
}