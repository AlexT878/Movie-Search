import FilterDropdown from "./FilterDropdown";

const GENRE_OPTIONS = ["All Genres", "Drama", "Fantasy", "Horror", "Action"];
const SORT_OPTIONS = ["Alphabetical: A-Z", "Alphabetical: Z-A", "Rating: High to Low", "Rating: Low to High"];

export default function Header({searchedMovie, setSearchedMovie, selectedGenre, setSelectedGenre, selectedSortOption, setSelectedSortOption}) {
    return (
        <header>
            <div className="nav-container">
                <button className="nav-btn">Home</button>
                <button className="nav-btn">Watchlist</button>
            </div>
            <div className="search-container">
                <form>
                    <input type="text" placeholder="Search..." className="search-input" value={searchedMovie} onChange={(event) => setSearchedMovie(event.target.value)}/>
                </form>
            </div>
            <div className="filters">
                <FilterDropdown filterName={"Genre"} options={GENRE_OPTIONS} selectedOption={selectedGenre} setSelectedOption={setSelectedGenre}/>
                <FilterDropdown filterName={"Sort"} options={SORT_OPTIONS} selectedOption={selectedSortOption} setSelectedOption={setSelectedSortOption}/>
            </div>
        </header>
    )
}