import {Routes, Route, BrowserRouter} from "react-router-dom"
import Headers from "./components/headers/Headers"
import Home from "./pages/Home/Home"
import Services from "./pages/Service/Services"
import Experience from "./pages/Experience/Experience"

function App() {


  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="service" element={<Services/> } />
          <Route path="experience" element={<Experience/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
