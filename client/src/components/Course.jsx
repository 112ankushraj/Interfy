import React from "react";
import { Clock, Book, Users, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Web Development Internship",
    students: "100+",
    img: "/image/program2.jpg",
  },

  {
    title: "Java Development Internship",
    students: "100+",
    img: "/image/program3.png",
  },
  {
    title: "Python Programming Internship",
    students: "70+",
    img: "/image/py.png",
  },
  {
    title: "C ++ Programming Internship",
    students: "150+",
    img: "/image/c++.png",
  },
  {
    title: "App Development Internship",
    students: "50+",
    img: "/image/program1.jpg",
  },

  {
    title: "Artificial Intelligence Internship",
    students: "50+",
    img: "/image/program4.jpg",
  },
];

export default function Course() {
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
        </div>
      </section>
    </>
  );
}
