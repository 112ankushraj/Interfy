import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Internship from "./pages/Internship";
import Verification from "./pages/Verification";
import Contact from "./pages/Contacted"
import About from "./pages/About";
import VerifyCertificate from "./pages/Certificate/VerifyCertificate";
import CreateCertificate from "./pages/Certificate/CreateCertificate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"




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
          <Route path="/verification" element={<VerifyCertificate />} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/certificate/create" element={<CreateCertificate/>} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000}/>
      </div>
    </>
  );
}

export default App;
