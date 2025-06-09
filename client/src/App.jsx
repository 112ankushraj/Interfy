import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import VerifyCertificate from "./pages/Certificate/VerifyCertificate";
import CreateCertificate from "./pages/Certificate/CreateCertificate";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internship" element={<Course />} />
          <Route path="/verification" element={<VerifyCertificate />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificate/create" element={<CreateCertificate />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <Footer/>

    </>
  );
}

export default App;
