import { Link, useParams } from "react-router-dom"
import moviesData from "../assets/movies.json"
import MovieCard from "./MovieCard";
import { MESSAGES } from "../constants/strings";

export default function MovieDetails() {
    const { id } = useParams();
    const movie = moviesData.find((m) => m.id === parseInt(id));

    // Early return
    if (!movie) {
        return <div>{MESSAGES.NOT_FOUND}<Link to="/" className="back-button">{MESSAGES.GO_BACK}</Link></div>;
    }

    return (
        <div className="details-container">
            <MovieCard 
                movie={movie} 
                className="movie-card-details" 
                />
            <Link to="/" className="back-button">
                {MESSAGES.BACK_MAIN}
            </Link>
        </div>
    )
}