import React from 'react';

const QuranSearch = () => {
    return (
        <div>
            <select defaultValue="Pick a color" className="select">
                <option disabled={true}>Pick a color</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
            </select>
        </div>
    );
};

export default QuranSearch;