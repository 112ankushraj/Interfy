import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Internship from "./pages/Internship";
import Verification from "./pages/Verification";
import Contact from "./pages/Contacted"


import About from "./pages/About";




function App() {
  return (
    <>
      <Navbar />
      
      <div className="pt-20">
        {" "}
        {/* Push content below fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
