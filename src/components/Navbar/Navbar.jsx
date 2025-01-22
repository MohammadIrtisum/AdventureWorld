import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Redirect to the Find Places page with the search query as a parameter
      navigate(`/places?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">AdventureWorld</div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/destinations" activeClassName="active">Destinations</NavLink>
          </li>
          <li>
            <NavLink to="/places" activeClassName="active">Find Places</NavLink>
          </li>
          <li>
            <NavLink to="/tours" activeClassName="active">Tours</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
