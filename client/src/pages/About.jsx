import React from "react";
import { CheckCircle } from "lucide-react";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="flex-1 w-full">
            <img
              src="/image/about2.png"
              alt="About banner"
              className="rounded-xl w-full shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-5">
            <p className="text-yellow-500 uppercase font-semibold tracking-wider">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              WHY CHOOSE <span className="text-yellow-400">US ?</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Internfy: Empowering Future Innovators Join the fastest-growing
              Ed-Tech platform in the country, where learning meets opportunity.
              At Internfy, we’re committed to shaping tomorrow’s tech leaders
              through hands-on, industry-ready experiences.
              <br />
              <strong>• 129+ students</strong> have completed impactful
              internships.
              <br />
              <strong>• 95% certified learners</strong> gained practical skills.
              <br />
              Work on real projects, grow with flexible learning, and access
              top-tier job support. With a strong alumni network and
              partnerships with leading tech companies, Internfy is where your
              success begins.
            </p>

            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" /> Expert Trainers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" /> Online Remote
                Learning
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" /> Lifetime Access
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
