export default function FilterDropdown({ filterName, options, selectedOption, setSelectedOption }) {
    return (
        <div className="filter-group">
            <span>{filterName}</span>
                <select className="filter-select" value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
                    {options.map((element) => (
                        <option key={element} value={element}> {element} </option>
                    ))}
            </select>
        </div>
    )
}