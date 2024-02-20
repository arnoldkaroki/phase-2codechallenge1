// Importing React
import React from 'react';

// SearchBar component for filtering transactions
const SearchBar = ({ searchTerm, onSearchChange }) => (
  <div id='searchdiv'>
    {/* Input field for entering search term */}
    <input id='searchbar'
      type="text"
      placeholder="Search transactions..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>
);

// Export the SearchBar component
export default SearchBar;
