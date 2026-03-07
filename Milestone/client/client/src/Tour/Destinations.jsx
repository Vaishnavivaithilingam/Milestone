import React, { useEffect, useState } from "react";

function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch(`${process.env.firebase}/api/destinations`)
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div className="section">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot.</p>

      {destinations.map((dest, idx) => (
        <div className="dest" key={idx}>
          <div>
            <h2>{dest.name}{dest.country ? `, ${dest.country}` : ""}</h2>
            <p>{dest.description}</p>
          </div>
          {dest.image && (
            <div className="images">
              <img src={dest.image} alt={dest.name} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Destinations;
            

    