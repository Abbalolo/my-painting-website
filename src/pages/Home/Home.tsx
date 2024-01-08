
import AboutUs from "../About us/AboutUs";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero"
import Services from "../Service/Services"
import WhyChooseUs from "../whyChooseUS/WhyChooseUs";


function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WhyChooseUs/>

        <Services />

      <Experience/>

    </div>
  );
}

export default Home