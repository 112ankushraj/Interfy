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
              src="/image/banner.jpg"
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
              CodeAlpha leads in Ed-Tech, the country's fastest-growing
              professional training platform. We're focused on shaping future
              tech creators. Our top-rated internships and certifications
              deliver powerful results:
              <br />
              <strong>• 129,000+ students</strong> have completed internships.
              <br />
              <strong>• 95% certified learners</strong> gained practical skills.
              <br />
              Learn by doing: real projects, real growth. Flexible learning,
              strong alumni network, job support, and partnerships with top tech
              firms—all here to build your success story.
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
