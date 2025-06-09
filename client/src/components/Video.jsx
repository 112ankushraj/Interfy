export default function Video() {
  return (
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
            href="https://www.youtube.com/@Internfy"
            className="absolute inset-0 flex items-center justify-center"
          >
            <button className="bg-yellow-400 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition">
              <Play className="text-black" size={32} />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
