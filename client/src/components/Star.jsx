export default function Star() {
  return (
    <section className="py-20 bg-white">
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
  );
}
