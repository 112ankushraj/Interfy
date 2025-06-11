import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Hero() {
  return (
    <>
      <Helmet>
        <title>Hero - Internfy</title>
        <meta
          name="description"
          content="Internfy connects students with the best internships to launch their careers. Discover opportunities, build skills, and grow your future."
        />
      </Helmet>

      <section
        id="home"
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/image/background.webp')" }}
      >
        {/* Overlay for text readability */}
        <div className="w-full min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="text-white max-w-xl text-center lg:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Practice your <span className="text-yellow-400">skills</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-350 ">
                Build a successful future with in-demand skills and real-world
                experience — start your journey with <strong>Internfy</strong>.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSetbDpB0M2hyM6ZXDnFvR8iJ8Iwuu614uKIzG_bJ9uDMeeshA/viewform?usp=preview"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition shadow"
              >
                Apply Internship
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
