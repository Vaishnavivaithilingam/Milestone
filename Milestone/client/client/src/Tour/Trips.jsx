import React, { useEffect, useState } from "react";

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tripsPage")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <div className="section">
      <h1>Featured Destinations</h1>
      <div className="cards">
        {trips.map((trip, idx) => (
          <div className="card" key={idx}>
            <img src={trip.image} alt={trip.location} />
            <h3>{trip.name}</h3>
            <p>{trip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trips;