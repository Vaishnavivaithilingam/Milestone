import React, { useEffect, useState } from "react";

function AllTrips() {
  const [trips, setTrips] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <div className="trips-section">
      <h1>Top Trip Destinations</h1>
      {Object.entries(trips).map(([country, places]) => (
        <div key={country} className="country-section">
          <h2>{country}</h2>
          <div className="trip-slider">
            {places.map((place, index) => (
              <div key={index} className="trip-card">
                <img src={place.image} alt={place.name} />
                <h3>{place.name}</h3>
                <p>Price: {place.price}</p>
                <button className="book-btn">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllTrips;