import {Routes, Route, BrowserRouter} from "react-router-dom"
import Headers from "./components/headers/Headers"
import Home from "./pages/Home/Home"
import Services from "./pages/Service/Services"
import AboutUs from "./pages/About us/AboutUs"
import Footer from "./components/Footer/Footer"
import ContactUS from "./pages/ContactUS/ContactUS"
import WhyChooseUs from "./pages/whyChooseUS/WhyChooseUs"
import Testimonial from "./pages/Testimonials/Testimonial"

function App() {


  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="service" element={<Services/> } />
          <Route path="aboutus" element={<AboutUs/> } />
          <Route path="contactus" element={<ContactUS/> } />
          <Route path="whychooseus" element={<WhyChooseUs/> } />
          <Route path="testimonial" element={<Testimonial/> } />
         
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
