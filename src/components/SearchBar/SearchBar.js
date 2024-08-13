
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './searchBar.css';
const SearchBar = ({ searchQuery, onSearchChange, onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
    
      navigate(`/searchPage?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="search-bar-container  ">
    <div className='content'>
    <h2>Welcome to our movie app </h2>
    <p>Millions of movie, TV shows and people to discover, Explore now</p>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => onSearchChange(e.target.value)} 
        placeholder="Search movies..." 
        className="search-bar"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
    </div>
  
  );
};

export default SearchBar;
