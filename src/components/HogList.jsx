import React, { useState } from "react";
import HogCard from "./HogCard";

const HogList = ({ hogs }) => {
    const [filterGreased, setFilterGreased] = useState(false);
    const [sortOption, setSortOption] = useState("");

    const handleFilterChange = (e) => {
        setFilterGreased(e.target.checked);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const filteredHogs = hogs.filter((hog) => !filterGreased || hog.greased);

    const sortedHogs = [...filteredHogs].sort((a, b) => {
        if (sortOption === "name") return a.name.localeCompare(b.name);
        if (sortOption === "weight") return a.weight - b.weight;
        return 0;
    });

    return (
        <div>
            <div>
                <label htmlFor="greased-filter">
                    <input
                        type="checkbox"
                        id="greased-filter"
                        checked={filterGreased}
                        onChange={handleFilterChange}
                    />
                    Greased Pigs Only?
                </label>
                <label htmlFor="sort">
                    Sort by:
                    <select id="sort" value={sortOption} onChange={handleSortChange}>
                        <option value="">None</option>
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                </label>
            </div>
            <div className="ui cards">
                {sortedHogs.map((hog) => (
                    <HogCard key={hog.name} hog={hog} />
                ))}
            </div>
        </div>
    );
};

export default HogList;