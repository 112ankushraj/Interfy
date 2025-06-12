import { Clock, Book, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import courses from "../data/courses";



export default function CourseList() {
  return (
    <>
      <Helmet>
        <title>Courses | Internfy Internships</title>
        <meta
          name="description"
          content="Explore top-rated internship courses at Internfy, including Web Development, Python, Java, AI, and more. Gain experience, build projects, and grow your skills!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.internfy.in/courses" />

        {/* Open Graph (OG) for better sharing */}
        <meta property="og:title" content="Courses | Internfy Internships" />
        <meta
          property="og:description"
          content="Enroll in practical internship programs in development, programming, and AI at Internfy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.internfy.in/courses" />
        <meta
          property="og:image"
          content="https://www.internfy.in/assets/internfy-banner.jpg"
        />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Internfy Internship Courses",
          "itemListElement": [
            ${courses
              .map(
                (course, index) => `{
              "@type": "ListItem",
              "position": ${index + 1},
              "name": "${course.title}",
              "url": "https://www.internfy.in/courses"
            }`
              )
              .join(",")}
          ]
        }
        `}</script>
      </Helmet>

      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-yellow-500 text-center uppercase font-semibold">
            Popular Courses
          </p>
          <h2 className="text-3xl font-bold text-center mb-10">
            Pick An Internship To Get Started
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(({ title, students, img }, i) => (
                <Course title={title} img={img} key={i} students={students}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



function Course({ img, title, students }) {
  const navigate = useNavigate();

  const handleView = () => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/course/${slug}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={img}
        alt={`${title} thumbnail`}
        className="w-full h-65 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
          <Clock className="text-yellow-400" size={16} /> 4 Weeks
        </div>
        <span className="text-xs inline-block mb-2 px-3 py-1 bg-green-100 text-green-600 rounded-full">
          Beginner to Advance
        </span>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <button
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-xl font-medium transition"
          onClick={handleView}
        >
          Overview
        </button>
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
  );
}
