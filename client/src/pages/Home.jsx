import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Play,
  Clock,
  Book,
  Contact,
  Contact2,
} from "lucide-react";
import Footer from "./Footer";
import About from "./About";
import Contacted from "./Contacted";
import { FaCertificate } from "react-icons/fa";
// import Certificate from "../components/Certificate";

const Home = () => {
  return (
    <>
      <div>
        <section
          id="home"
          className="w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/image/newbg.jpg')" }}
        >
          {/* Overlay for text readability */}
          <div className="w-full min-h-screen flex items-center">
            <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="text-white max-w-xl text-center lg:text-left space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Practice your <span className="text-yellow-400">skills</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-300">
                  Lay the foundation for your future prospects and dreams with
                  the skills for excellence with <strong>Internfy</strong>.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSetbDpB0M2hyM6ZXDnFvR8iJ8Iwuu614uKIzG_bJ9uDMeeshA/viewform?usp=preview"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition shadow"
                >
                  Apply Internship
                  <ArrowRight size={20} />
                </a>
              </div>

              {/* Image Content */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/image/side.jpg"
                  alt="Hero Banner"
                  className="w-full max-w-sm rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <About />

        {/* Courses Section */}
        <section id="courses" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-yellow-500 text-center uppercase font-semibold">
              Popular Courses
            </p>
            <h2 className="text-3xl font-bold text-center mb-10">
              Pick A Internship To Get Started
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Development Internship",
                  students: "100+",
                  img: "/image/program2.jpg",
                },
                {
                  title: "Python Programming Internship",
                  students: "70+",
                  img: "/image/py.png",
                },
                {
                  title: "Java Development Internship",
                  students: "100+",
                  img: "/image/program3.png",
                },
              ].map(({ title, students, img }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-65 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                      <Clock className="text-yellow-400" size={16} /> 4 Weeks
                    </div>
                    <span className="text-xs inline-block mb-2 px-3 py-1 bg-green-100 text-green-600 rounded-full">
                      Beginner to Advance
                    </span>
                    <h3 className="text-lg font-semibold mb-4">{title}</h3>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSetbDpB0M2hyM6ZXDnFvR8iJ8Iwuu614uKIzG_bJ9uDMeeshA/viewform?usp=preview"
                      className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-xl font-medium transition"
                    >
                      Register
                    </a>
                    <ul className="flex mt-4 text-sm text-gray-600 gap-4">
                      <li className="flex items-center gap-1">
                        <Book size={16} /> 4 Projects
                      </li>
                      <li className="flex items-center gap-1">
                        <Users size={16} /> {students} Students
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="internship"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-medium transition"
              >
                Browse more courses
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ["500+", "Registrations"],
              ["300+", "Participants"],
              ["70%", "Satisfaction Rate"],
              ["20+", "State"],
            ].map(([value, label], i) => (
              <div key={i} className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-500">{value}</h3>
                <p className="text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat py-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
                alt="video banner"
                className="rounded-xl w-full max-w-4xl mx-auto"
              />
              <a
                href="https://youtu.be/jLRZ1Sod_hA?si=n4WkdruA6iuRQ-dP"
                className="absolute inset-0 flex items-center justify-center"
              >
                <button className="bg-yellow-400 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition">
                  <Play className="text-black" size={32} />
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Contacted />
    </>
  );
};

export default Home;
