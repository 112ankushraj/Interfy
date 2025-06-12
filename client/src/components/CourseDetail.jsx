// src/pages/CourseDetail.jsx
import { useParams } from "react-router-dom";
// import { courses } from "./Course"; // if needed, move courses to a shared file
import { Helmet } from "react-helmet-async";

import courses from "../data/courses";


export default function CourseDetail() {
  const { courseSlug } = useParams();

  const course = courses.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, "-") === courseSlug
  );

  if (!course) {
    return <div className="text-center p-10">Course not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{course.title} | Internfy</title>
        <meta name="description" content={`Details about ${course.title} internship at Internfy.`} />
      </Helmet>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6">
          <img src={course.img} alt={course.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="mb-4 text-gray-700">
            This is a practical, hands-on internship where you’ll work on real-world projects.
            By the end, you’ll complete 4 projects and gain valuable experience.
          </p>
          <ul className="text-gray-600 mb-4">
            <li>📅 Duration: 4 Weeks</li>
            <li>📚 Projects: 4</li>
            <li>👥 Enrolled: {course.students}</li>
            <li>📈 Level: Beginner to Advanced</li>
          </ul>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSetbDpB0M2hyM6ZXDnFvR8iJ8Iwuu614uKIzG_bJ9uDMeeshA/viewform?usp=preview"
            target="_blank"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            Register Now
          </a>
        </div>
      </section>
    </>
  );
}
