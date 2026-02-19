import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchlist } from "../slices/watchlistSlice";
import { MESSAGES, DEFAULT_IMAGE } from "../constants/strings";

export default function MovieCard( {movie, className} ) {
    const dispatch = useDispatch();
    const isWatchListed = useSelector((state) => 
        state.watchlist.some(item => item.id === movie.id)
    );

    const handleWatchlistClick = (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        dispatch(toggleWatchlist(movie));
    };

    return (
        <Link to={`/movies/${movie.id}`} className={className}>
            <div className="movie-card">
                <div className="card-image-wrapper">
                    <img 
                        src={`/${movie.image || DEFAULT_IMAGE}`} 
                        alt={movie.title} 
                        className="movie-image" 
                        onError={(e) => e.target.src = DEFAULT_IMAGE} 
                    />
                </div>
                
                <div className="card-content">
                    <span className="movie-title">{movie.title}</span>
                    <div className="card-info">
                        <span className="genre-label">{movie.genre || "no genre"}</span>
                        <span className={`rating-badge ${movie.rating >= 8 ? 'high' : 'mid'}`}> {movie.rating || "no rating"} </span>
                    </div>
                    <button className="add-watchlist-btn" onClick={handleWatchlistClick}> 
                        {isWatchListed ? `${MESSAGES.REMOVE_WATCHLIST}` : `${MESSAGES.ADD_WATCHLIST}`}
                    </button>
                </div>
            </div>
        </Link>
    )
}