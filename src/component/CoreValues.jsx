const cardData = [
  {
    title: "WE BELIEVE",
    text: "In a holistic approach to education that fosters intellectual curiosity, emotional resilience, and respect for all individuals, enabling students to become thoughtful and responsible citizens.",
    bgColor: "bg-teal-500",
    icon: "💡",
  },
  {
    title: "WE PLEDGE",
    text: "To nurture students' self-worth, dignity, and a strong sense of fairness. We encourage respect for diversity and empathy for all, creating a safe and inclusive environment.",
    bgColor: "bg-slate-800",
    icon: "⚙️",
  },
  {
    title: "WE WANT",
    text: "Our students to be confident, innovative, and kind. We aim to instill leadership qualities, social responsibility, and a lifelong love for learning.",
    bgColor: "bg-red-500",
    icon: "👍",
  },
];

const CoreValues = () => {
  return (
    <section className="py-12 bg-white text-center">
      {/* Header Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-playfair">
        WE AIM: TO PREPARE THE STUDENT
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mb-6 font-playfair">
        to be intellectually competent to promote the development of intellectual
        skills and mastery of the academic requirements.
      </p>
      <div className="w-6 h-0.5 bg-gray-700 mx-auto mb-10"></div>

      {/* Core Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-white">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`relative p-8 md:p-10 h-full ${card.bgColor} flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair">{card.title}</h3>
              <p className="text-sm leading-relaxed font-playfair">{card.text}</p>
            </div>

            <div className="mt-6">
              <button className="mt-4 border border-white text-white px-4 py-2 text-sm uppercase hover:bg-white hover:text-black transition-all">
                ++
              </button>
            </div>

            <div className="absolute right-4 bottom-4 text-6xl opacity-10 animate-bounce">
              {card.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
