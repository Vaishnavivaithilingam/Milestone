import Hero from "./Hero.jsx";
import Destinations from "./Destinations.jsx";
import Trips from "./Trips.jsx";
import Footer from "./Footer.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Destinations />
      <Trips />
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default Home;