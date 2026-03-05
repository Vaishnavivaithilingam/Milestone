import React from "react";

function AllTrips() {
  const trips = {
    Dubai: [
      {
        name: "Burj Khalifa",
        price: "₹5,000",
        image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHViYWl8ZW58MHx8MHx8fDA%3D"
      },
      {
        name: "Dubai Marina",
        price: "₹2,500",
        image: "https://plus.unsplash.com/premium_photo-1697729798591-8b7e1b271515?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGR1YmFpfGVufDB8fDB8fHww"
      },
      {
        name: "Palm Jumeirah",
        price: "₹3,000",
        image: "https://images.unsplash.com/photo-1677508397947-b477be938a9b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhbG0lMjBqdW1laXJhaHxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],
    Malaysia: [
      {
        name: "Petronas Twin Towers",
        price: "₹2,000",
        image: "https://images.unsplash.com/photo-1597148543182-830ef7bbb904?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0cm9uYXMlMjB0d2luJTIwdG93ZXJ8ZW58MHx8MHx8fDA%3D"
      },
      {
        name: "Kuala Lumpur Skyline",
        price: "₹2,500",
        image: "https://images.unsplash.com/photo-1709754954361-c36e86f75fa1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGt1YWxhJTIwbHVtcHVyJTIwc2t5bGluZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        name: "Batu Caves",
        price: "₹1,500",
        image: "https://images.unsplash.com/photo-1589304122321-2344bad22557?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmF0dSUyMGNhdmV8ZW58MHx8MHx8fDA%3D"
      }
    ],
    France: [
      {
        name: "Eiffel Tower",
        price: "₹4,000",
        image: "https://plus.unsplash.com/premium_photo-1719430569503-338fc89eb21f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWlmZmVsJTIwdG93ZXJ8ZW58MHx8MHx8fDA%3D"
      },
      {
        name: "Louvre Museum",
        price: "₹3,500",
        image: "https://images.unsplash.com/photo-1565099824688-e93eb20fe622?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvdXZyZSUyMG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        name: "Mont Saint‑Michel",
        price: "₹5,000",
        image: "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9udCUyMHNhaW50JTIwbWljaGVsfGVufDB8fDB8fHww"
      }
    ],
    Bali: [
      {
        name: "Ubud Monkey Forest",
        price: "₹1,500",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80"
      },
      {
        name: "Tanah Lot Temple",
        price: "₹2,000",
        image: "https://images.unsplash.com/photo-1624935851312-845758a99160?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFuYWglMjBsb3QlMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D"
      },
      {
        name: "Kuta Beach",
        price: "₹2,500",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
      }
    ],
    Switzerland: [
      {
        name: "Matterhorn",
        price: "₹8,000",
        image: "https://images.unsplash.com/photo-1585587218731-a1f785256989?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWF0dGVyaG9ybnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        name: "Lake Geneva",
        price: "₹5,500",
        image: "https://images.unsplash.com/photo-1571296224867-b67f50725c17?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZSUyMGdlbmV2YXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        name: "Chillon Castle",
        price: "₹4,500",
        image: "https://plus.unsplash.com/premium_photo-1730041692386-d17d8b95b580?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaWxsb24lMjBjYXN0bGV8ZW58MHx8MHx8fDA%3D"
      }
    ],
    Japan: [
      {
        name: "Mount Fuji",
        price: "₹4,500",
        image: "https://images.unsplash.com/photo-1705481109538-fb7edf4a5758?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50JTIwZnVqaXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        name: "Shibuya Crossing",
        price: "₹2,500",
        image: "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpYnV5YSUyMGNyb3NzaW5nfGVufDB8fDB8fHww"
      },
      {
        name: "Kyoto Temples",
        price: "₹3,500",
        image: "https://images.unsplash.com/photo-1614360380098-63e2fbfda70b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG8lMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D"
      }
    ],
    Paris: [
      {
        name: "Notre‑Dame Cathedral",
        price: "₹2,500",
        image: "https://plus.unsplash.com/premium_photo-1719430571386-b32cec341373?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5vdHJlLWRhbWUlMjBjYXRoZWRyYWx8ZW58MHx8MHx8fDA%3D"
      },
      {
        name: "Sacre‑Coeur",
        price: "₹2,000",
        image: "https://images.unsplash.com/photo-1589805054722-c407021fa8ef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FjcmUlMjBjb2V1cnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        name: "Versailles Palace",
        price: "₹5,000",
        image: "https://images.unsplash.com/photo-1633117678842-5f3e65cf8ad1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVyc2FpbGxlcyUyMHBhbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
      }
    ]
  };

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