import { useMemo } from "react";

export default function useMovies(moviesData, search, genre, sort) {
    const sortedMovies = useMemo(() => {
        const filteredMovies = moviesData.filter((movie) => {
            const matchesName = movie.title.toLowerCase().includes(search.toLowerCase())
            const matchesGenre = genre === "All Genres" || genre.toLowerCase() === movie.genre;
        
            return matchesName && matchesGenre;
        });
        
        return [...filteredMovies].sort((a, b) => {
            if (sort === "Rating: High to Low") return b.rating - a.rating;
            if (sort === "Rating: Low to High") return a.rating - b.rating;
            if (sort === "Alphabetical: A-Z") return a.title.localeCompare(b.title);
            if (sort === "Alphabetical: Z-A") return b.title.localeCompare(a.title);

            return 0;
        })
        
    }, [moviesData, search, genre, sort])

    return sortedMovies;
}