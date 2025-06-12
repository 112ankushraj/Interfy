import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import VerifyCertificate from "./pages/Certificate/VerifyCertificate";
import CreateCertificate from "./pages/Certificate/CreateCertificate";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CourseList from "./components/Course";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CourseDetail from "./components/CourseDetail";


function App() {
  return (
    <>
      <Navbar />

      <div className="pt-20">
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CourseList />} />
          <Route path="/verification" element={<VerifyCertificate />} />
          <Route path="/course/:courseSlug" element={<CourseDetail />} /> 
          <Route path="/contactus" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/certificate/create" element={<CreateCertificate />} />
        </Routes>
       
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <Footer/>

    </>
  );
}

export default App;
