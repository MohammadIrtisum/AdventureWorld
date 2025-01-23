import React, { useState } from 'react';
import axios from 'axios';
import './Places.css';

function Places() {
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const unsplashAPI = "https://api.unsplash.com/search/photos";
  const unsplashAccessKey = "lKDbn2QoVoQYCBEq3t6PEtdBJf4WHzsTojJ8PTlz62E";  // Replace with your actual Unsplash key

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const imageResponse = await axios.get(unsplashAPI, {
        params: {
          query: query,
          client_id: unsplashAccessKey,
          per_page: 5,
        },
      });

      const placesData = imageResponse.data.results.map((image) => ({
        name: image.alt_description || 'Unknown',
        image: image.urls.small,
      }));

      setPlaces(placesData);
    } catch (error) {
      console.error("Error fetching places:", error);
    }

    setLoading(false);
  };

  return (
    <div className="places-container">
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for places..."
      />
      <button className="search-button" onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      <div className="places-list">
        {places.length > 0 ? (
          places.map((place, index) => (
            <div key={index} className="place-card">
              <img className="place-image" src={place.image} alt={place.name} />
              <div className="place-info">
                <h3>{place.name}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default Places;