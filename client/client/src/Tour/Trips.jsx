import React from "react";

function Trips() {
  return (
    <div className="section">
      <h1>Featured Destinations</h1>

      <div className="cards">
        {/* Dubai */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=700&auto=format&fit=crop&q=60"
            alt="Dubai"
          />
          <h3>Trip in Dubai</h3>
          <p>Dubai is famous for the tallest building, Burj Khalifa.</p>
        </div>

        {/* Malaysia */}
        <div className="card">
          <img
            src="https://plus.unsplash.com/premium_photo-1678303397238-76250a5ebf73?w=700&auto=format&fit=crop&q=60"
            alt="Malaysia"
          />
          <h3>Trip in Malaysia</h3>
          <p>Malaysia is known as Truly Asia.</p>
        </div>

        {/* France */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            alt="France"
          />
          <h3>Trip in France</h3>
          <p>France is famous for art, fashion, and culture.</p>
        </div>

        {/* Bali */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4"
            alt="Bali"
          />
          <h3>Trip in Bali</h3>
          <p>Bali is known for beaches, temples, and peaceful nature.</p>
        </div>

        {/* Switzerland */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Switzerland"
          />
          <h3>Trip in Switzerland</h3>
          <p>Switzerland is famous for mountains and scenic views.</p>
        </div>

        {/* Japan */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1549693578-d683be217e58"
            alt="Japan"
          />
          <h3>Trip in Japan</h3>
          <p>Japan blends tradition with modern technology.</p>
        </div>

        {/* Paris */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
            alt="Paris"
          />
          <h3>Trip in Paris</h3>
          <p>Paris is the city of love and iconic landmarks.</p>
        </div>
      </div>
    </div>
  );
}

export default Trips;