
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
const App = () => {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/technologies" element={<Technologies />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App