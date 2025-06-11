import { Helmet } from "react-helmet";
import { Play } from "lucide-react"; // Ensure this import is present

export default function Video() {
  return (
    <>
      <Helmet>
        <title>About Internfy | Introduction Video</title>
        <meta
          name="description"
          content="Discover how Internfy connects students with valuable internships. Watch our intro video to see how we help students grow, learn, and succeed."
        />
        <meta
          name="keywords"
          content="Internfy, introduction video, internships, student career, connect with companies, education platform"
        />
        <meta property="og:title" content="Internfy Introduction Video" />
        <meta
          property="og:description"
          content="Watch how Internfy empowers students to secure internships and gain practical experience. Our video explains our mission and impact."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
        />
        <meta property="og:type" content="video.other" />
        <meta property="og:url" content="https://www.internfy.in/about" />
      </Helmet>

      <section
        className="relative bg-cover bg-center bg-no-repeat py-20"
        aria-labelledby="video-heading"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 id="video-heading" className="sr-only">
            Internfy Introduction Video
          </h2>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
              alt="Internfy introduction video banner"
              className="rounded-xl w-full max-w-4xl mx-auto"
            />
            <a
              href="https://www.youtube.com/@Internfy"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Watch our introduction video on YouTube"
            >
              <button className="bg-yellow-400 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition">
                <Play className="text-black" size={32} />
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
