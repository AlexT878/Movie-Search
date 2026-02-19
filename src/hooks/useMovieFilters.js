import { useSearchParams } from "react-router-dom";

export default function useMovieFilters() {
    const [searchParams] = useSearchParams();

    const filters = {
        search: searchParams.get("search") || "",
        genre: searchParams.get("genre") || "All Genres",
        sort: searchParams.get("sort") || "Alphabetical: A-Z"
    };

    return filters;
}