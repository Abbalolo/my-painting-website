
import AboutUs from "../About us/AboutUs";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero"
import Services from "../Service/Services"


function Home() {
  return (
    <div>
      <Hero />
      <AboutUs/>

        <Services />

      <Experience/>

    </div>
  );
}

export default Home