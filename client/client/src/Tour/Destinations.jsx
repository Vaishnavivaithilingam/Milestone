import React from "react";

function Destinations() {
  return (
    <div className="section">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot.</p>

      {/* Maldives */}
      <div className="dest">
        <div>
          <h2>Maldives Beach, Maldives</h2>
          <p>
            Crystal-clear turquoise water, soft white sand, and peaceful sunsets 
            make this beach a perfect destination for relaxation and romance. 
            Ideal for island hopping, snorkeling, and luxury stays.
          </p>
        </div>

        <div className="images">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
            alt="Maldives Beach"
          />
          <img 
            src="https://images.unsplash.com/photo-1595184979141-090792f6b578?w=700&auto=format&fit=crop&q=60"
            alt="Maldives Resort"
          />
        </div>
      </div>
<br />
<br />
<br />

      {/* Kerala */}
      <div className="dest des">
        <div>
          <h2>Kerala, India</h2>
          <p>
            Known as "God's Own Country," Kerala is famous for its serene 
            backwaters, lush green landscapes, hill stations, and beautiful 
            beaches. Enjoy houseboat cruises, Ayurvedic retreats, wildlife 
            sanctuaries, and rich cultural traditions.
          </p>
        </div>

        <div className="images">
          <img 
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944" 
            alt="Kerala Backwaters"
          />
          <img 
            src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e" 
            alt="Kerala Nature"
          />
        </div>
      </div>

    </div>
  );
}

export default Destinations;