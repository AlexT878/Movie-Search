import { Link } from "react-router-dom"

export default function MovieCard( {movie, className, addToWatchlist, isWatchListed} ) {
    return (
        <Link to={`/movies/${movie.id}`} className={className}>
            <div className="movie-card">
                <div className="card-image-wrapper">
                    <img src={`/${movie.image}`} alt={movie.title} className="movie-image" />
                </div>
                <div className="card-content">
                    <span className="movie-title">{movie.title}</span>
                    <div className="card-info">
                        <span className="genre-label">{movie.genre}</span>
                        <span className={`rating-badge ${movie.rating >= 8 ? 'high' : 'mid'}`}> {movie.rating} </span>
                    </div>
                    <button className="add-watchlist-btn" onClick={(e) => {e.preventDefault(); e.stopPropagation(); addToWatchlist(); }}> 
                        {isWatchListed ? "Remove from Watchlist" : "Add to Watchlist"}
                    </button>
                </div>
            </div>
        </Link>
    )
}