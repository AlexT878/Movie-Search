import MovieCard from "./MovieCard";

export default function WatchList({ watchlist, addToWatchlist }) {
    return (
        <div className="movie-grid">
            {watchlist.map(movie => (
                <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                    className="card-link" 
                    addToWatchlist={() => addToWatchlist(movie)}
                    isWatchListed={true} 
                />
            ))}
        </div>
    );
}