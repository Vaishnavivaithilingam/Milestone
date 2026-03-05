import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Tour/Navbar";
import Home from "./Tour/Home"
import Hero from "./Tour/Hero";
import Destinations from "./Tour/Destinations";
import Trips from "./Tour/Trips";
import Contact from "./Tour/Contact";
import About from "./Tour/About";
import AllTrips from "./Tour/AllTrips";
import Login from "./Tour/Login";
import Signup from "./Tour/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/alltrips" element={<AllTrips />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>

    
    </BrowserRouter>
  );
}

export default App;