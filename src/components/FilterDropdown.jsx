export default function FilterDropdown({ filterName, options }) {
    return (
        <div className="filter-group">
            <span>{filterName}</span>
                <select className="filter-select">
                    {options.map((element) => (
                        <option key={element} value={element}> {element} </option>
                    ))}
            </select>
        </div>
    )
}