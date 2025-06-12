import { Helmet } from "react-helmet-async";

export default function Star() {
  return (
    <>
      <Helmet>
        <title>Internfy Statistics | Registrations, Participants, Reach</title>
        <meta
          name="description"
          content="Explore Internfy's growth with key stats: 500+ registrations, 300+ active participants, a 70% satisfaction rate, and presence in over 20 states across India."
        />
        <meta name="keywords" content="Internfy statistics, internship data, student reach, satisfaction rate, participation, education India" />
      </Helmet>

      <section className="py-20 bg-white" aria-labelledby="internfy-stats-heading">
        <h2 id="internfy-stats-heading" className="sr-only">
          Internfy Platform Statistics
        </h2>
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["500+", "Registrations"],
            ["300+", "Participants"],
            ["70%", "Satisfaction Rate"],
            ["20+", "State"],
          ].map(([value, label], i) => (
            <div key={i} className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-yellow-500">{value}</h3>
              <p className="text-gray-700">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
