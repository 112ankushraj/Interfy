import React from "react";
import { Clock, Book, Users, ArrowRight } from "lucide-react";
import Footer from "./Footer";

const courses = [
  {
    title: "Web Development Internship",
    students: "70.05K+",
    img: "/image/program2.jpg",
  },
  {
    title: "App Development Internship",
    students: "30.09K+",
    img: "/image/program1.jpg",
  },
  {
    title: "Java Development Internship",
    students: "40.45K+",
    img: "/image/program3.png",
  },
  {
  
     title: "C ++ Programming Internship",
    students: "20.05K+",
    img: "https://images.unsplash.com/photo-1581090700227-1e8eec8d2266?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Python Programming Internship",
    students: "25.09K+",
    img: "https://images.unsplash.com/photo-1581276879432-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Artificial Intelligence Internship",
    students: "20.45K+",
    img: "/image/program4.jpg",
  },
];

const CoursesSection = () => {
  return (
    <>
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-yellow-500 text-center uppercase font-semibold">
          Popular Courses
        </p>
        <h2 className="text-3xl font-bold text-center mb-10">
          Pick A Internship To Get Started
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(({ title, students, img }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                  <Clock className="text-yellow-400" size={16} /> 4 Weeks
                </div>
                <span className="text-xs inline-block mb-2 px-3 py-1 bg-green-100 text-green-600 rounded-full">
                  Beginner to Advance
                </span>
                <h3 className="text-lg font-semibold mb-4">{title}</h3>
                <a
                  href="https://forms.gle/s9TW7Tqi3tAQLCu78"
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
        
      </div>
    </section>

    <Footer/>

    </>
  );
};

export default CoursesSection;
