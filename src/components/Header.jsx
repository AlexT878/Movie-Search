import { NavLink, useSearchParams } from "react-router-dom";
import FilterDropdown from "./FilterDropdown";

const GENRE_OPTIONS = ["All Genres", "Drama", "Fantasy", "Horror", "Action"];
const SORT_OPTIONS = ["Alphabetical: A-Z", "Alphabetical: Z-A", "Rating: High to Low", "Rating: Low to High"];

export default function Header() {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchedMovie = searchParams.get("search") || "";
    const selectedGenre = searchParams.get("genre") || "All Genres";
    const selectedSortOption = searchParams.get("sort") || "Alphabetical: A-Z";

    function updateURL(newFilters) {
        const nextParams = {
            search: searchedMovie,
            genre: selectedGenre,
            sort: selectedSortOption,
            ...newFilters
        }
        if (!nextParams.search) delete nextParams.search;
        if (nextParams.genre === "All Genres") delete nextParams.genre;
        if (nextParams.sort === "Alphabetical: A-Z") delete nextParams.sort;

        setSearchParams(nextParams);
    }

    return (
        <header>
            <div className="nav-container">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>
                    Home
                </NavLink>
                <NavLink to="/watchlist" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>
                    Watchlist
                </NavLink>
            </div>
            <div className="search-container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Search..." className="search-input" value={searchedMovie} onChange={(event) => updateURL({ search: event.target.value })}/>
                </form>
            </div>
            <div className="filters">
                <FilterDropdown filterName={"Genre"} options={GENRE_OPTIONS} selectedOption={selectedGenre} setSelectedOption={(val) => updateURL({ genre: val })}/>
                <FilterDropdown filterName={"Sort"} options={SORT_OPTIONS} selectedOption={selectedSortOption} setSelectedOption={(val) => updateURL({ sort: val })}/>
            </div>
        </header>
    )
}