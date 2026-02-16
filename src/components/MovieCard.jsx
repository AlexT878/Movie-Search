export default function MovieCard( {movie} ) {
    return (
        <div className="movie-card">
            <div className="card-image-wrapper">
                <img src={movie.image} alt={movie.title} className="movie-image" />
            </div>
            <div className="card-content">
                <span class="movie-title">{movie.title}</span>
                <div className="card-info">
                    <span className="genre-label">{movie.genre}</span>
                    <span className={`rating-badge ${movie.rating >= 8 ? 'high' : 'mid'}`}> {movie.rating} </span>
                </div>
                <button className="add-watchlist-btn"> Add to Watchlist </button>
            </div>
        </div>
    )
}