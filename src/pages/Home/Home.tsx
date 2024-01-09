
import AboutUs from "../About us/AboutUs";

import Hero from "../Hero/Hero"
import Services from "../Service/Services"
import Testimonial from "../Testimonials/Testimonial";
import WhyChooseUs from "../whyChooseUS/WhyChooseUs";


function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WhyChooseUs/>

      <Services />
      <Testimonial/>

    </div>
  );
}

export default Home