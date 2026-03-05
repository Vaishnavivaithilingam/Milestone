import Hero from "./Tour/Hero.js";
import Destinations from "./Tour/Destinations.js";
import Trips from "./Tour /Trips.js";
import Footer from "./Tour/Footer.js";
import Contact from "./Tour/Contact.js";
import About from "./Tour/About.js";

function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Destinations />
      <Trips />
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default Home;