import {Routes, Route, BrowserRouter} from "react-router-dom"
import Headers from "./components/headers/Headers"
import Home from "./pages/Home/Home"
import Services from "./pages/Service/Services"
import Experience from "./pages/Experience/Experience"
import Members from "./pages/Member/Members"

function App() {


  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="service" element={<Services/> } />
          <Route path="experience" element={<Experience/> } />
          <Route path="experience" element={<Members/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
