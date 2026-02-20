import { useState, useEffect } from 'react';
import moviesData from '../assets/movies.json';

export default function useSimulateFetch() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMovies(moviesData);
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return { movies, isLoading };
}