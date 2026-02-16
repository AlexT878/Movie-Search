import FilterDropdown from "./FilterDropdown";

const GENRE_OPTIONS = ["All Genres", "Drama", "Fantasy"];
const RATING_OPTIONS = ["All", "Drama", "Fantasy"];

export default function Header() {
    return (
        <header>
            <div className="nav-container">
                <button className="nav-btn">Home</button>
                <button className="nav-btn">Watchlist</button>
            </div>
            <div className="search-container">
                <form>
                    <input type="text" placeholder="Search..." className="search-input"/>
                </form>
            </div>
            <div className="filters">
                <FilterDropdown filterName={"Genre"} options={GENRE_OPTIONS}/>
                <FilterDropdown filterName={"Rating"} options={RATING_OPTIONS}/>
            </div>
        </header>
    )
}