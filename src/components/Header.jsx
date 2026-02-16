import FilterDropdown from "./FilterDropdown";

const GENRE_OPTIONS = ["All Genres", "Drama", "Fantasy", "Horror", "Action"];
const RATING_OPTIONS = ["All", "Drama", "Fantasy"];

export default function Header({searchedMovie, setSearchedMovie, selectedGenre, setSelectedGenre}) {
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
                <FilterDropdown filterName={"Genre"} options={GENRE_OPTIONS} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
                <FilterDropdown filterName={"Rating"} options={RATING_OPTIONS}/>
            </div>
        </header>
    )
}