export default function FilterDropdown({ filterName, options, selectedGenre, setSelectedGenre }) {
    return (
        <div className="filter-group">
            <span>{filterName}</span>
                <select className="filter-select" value={selectedGenre} onChange={(event) => setSelectedGenre(event.target.value)}>
                    {options.map((element) => (
                        <option key={element} value={element}> {element} </option>
                    ))}
            </select>
        </div>
    )
}