import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tour.css"

function Hero() {
  const navigate = useNavigate();

    return (
      <div className="hero">
        <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination.</p>
        <button onClick={() => navigate("/alltrips")}>Travel Plan</button>
      </div>
    );
  }
  
  export default Hero;