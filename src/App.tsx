import {Routes, Route, BrowserRouter} from "react-router-dom"
import Headers from "./components/headers/Headers"
import Home from "./pages/Home/Home"
import Services from "./pages/Service/Services"
import AboutUs from "./pages/About us/AboutUs"
import Footer from "./components/Footer/Footer"
import ContactUS from "./pages/ContactUS/ContactUS"
import WhyChooseUs from "./pages/whyChooseUS/WhyChooseUs"
import Testimonial from "./pages/Testimonials/Testimonial"
import Appointment from "./pages/ContactUS/Appointment"
import ScrollToTop from "./components/scrollToTop/ScrollToTop"
import Features from "./pages/Features/Features"

function App() {


  return (
    <>
      <BrowserRouter>
        <Headers />
          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="service" element={<Services/> } />
          <Route path="aboutus" element={<AboutUs/> } />
          <Route path="contactus" element={<ContactUS/> } />
          <Route path="whychooseus" element={<WhyChooseUs/> } />
          <Route path="testimonial" element={<Testimonial/> } />
          <Route path="features" element={<Features/> } />
          <Route path="appointment" element={<Appointment/> } />
         
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
