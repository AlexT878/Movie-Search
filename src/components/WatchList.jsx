import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

export default function WatchList() {
    const watchlist = useSelector((state) => state.watchlist);

    return (
        <div className="movie-grid">
            {watchlist.map(movie => (
                <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                    className="card-link" 
                />
            ))}
        </div>
    );
}