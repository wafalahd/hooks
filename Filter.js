import React from 'react'

const Filter =({filterTitle, filterRating, handleTitleChange, handleRatingChange}) =>{

return (
    <div>
        <input
        type="text"
        value={filterTitle}
        onChange={handleTitleChange}
        />
        <input
        type="number"
        min="1"
        max="10"
        value={filterRating}
        onChange={handleRatingChange}
        />
    </div>
);
};

export default Filter