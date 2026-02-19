import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchlist } from "../slices/watchlistSlice";

export default function MovieCard( {movie, className} ) {
    const dispatch = useDispatch();
    const watchlist = useSelector((state) => state.watchlist);
    const isWatchListed = watchlist.some(item => item.id === movie.id);

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
                    <button className="add-watchlist-btn" onClick={(e) => {e.preventDefault(); e.stopPropagation(); dispatch(toggleWatchlist(movie)); }}> 
                        {isWatchListed ? "Remove from Watchlist" : "Add to Watchlist"}
                    </button>
                </div>
            </div>
        </Link>
    )
}