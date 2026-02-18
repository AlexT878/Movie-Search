import { Link, useParams } from "react-router-dom"
import moviesData from "../assets/movies.json"
import MovieCard from "./MovieCard";

export default function MovieDetails({ addToWatchlist, watchlist }) {
    const { id } = useParams();

    const movie = moviesData.find((m) => m.id === parseInt(id));

    return (
        <div className="details-container">
            <MovieCard 
                movie={movie} 
                className="movie-card-details" 
                addToWatchlist={() => addToWatchlist(movie)}
                isWatchListed={watchlist.some(item => item.id === movie.id)}
                />
            <Link to="/" className="back-button">
                Back to main page
            </Link>
        </div>
    )
}