// src/pages/CourseDetail.jsx
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import courses from "../data/courses";

export default function CourseDetail() {
  const { courseSlug } = useParams();

  const course = courses.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, "-") === courseSlug
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-xl px-4 text-center">
        Course not found
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{course.title} | Internfy</title>
        <meta
          name="description"
          content={`Details about ${course.title} internship at Internfy.`}
        />
      </Helmet>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
          <img
            src={course.img}
            alt={course.title}
            className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
          />

          <div className="p-6 sm:p-8 md:p-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>

            <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
              This is a practical, hands-on internship where you’ll work on real-world projects. By the end, you’ll complete 4 projects and gain valuable experience.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <li className="flex items-center gap-3 bg-yellow-100 text-yellow-900 px-4 py-3 rounded-lg shadow-sm text-sm sm:text-base">
                📅 <span className="font-medium">Duration:</span> 4 Weeks
              </li>
              <li className="flex items-center gap-3 bg-purple-100 text-purple-900 px-4 py-3 rounded-lg shadow-sm text-sm sm:text-base">
                📚 <span className="font-medium">Projects:</span> 4
              </li>
              <li className="flex items-center gap-3 bg-green-100 text-green-900 px-4 py-3 rounded-lg shadow-sm text-sm sm:text-base">
                👥 <span className="font-medium">Enrolled:</span> {course.students}
              </li>
              <li className="flex items-center gap-3 bg-blue-100 text-blue-900 px-4 py-3 rounded-lg shadow-sm text-sm sm:text-base">
                📈 <span className="font-medium">Level:</span> Beginner to Advanced
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md text-gray-800 text-sm sm:text-base italic mb-8">
              🌟 Step into Your Future with Our Internship Program! <br />
              📝 First, register for the internship program. <br />
              📊 After registration, take a short test of 20 MCQs. <br />
              💼 Based on your performance, we’ll assign a project that matches your skills and interests.
            </div>

            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSetbDpB0M2hyM6ZXDnFvR8iJ8Iwuu614uKIzG_bJ9uDMeeshA/viewform?usp=preview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl shadow transition duration-300 w-full sm:w-auto"
              >
                🚀 Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
