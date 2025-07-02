import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I am so glad I came across Encore at the time I did. It made preparing for my Unified A.I Directory less stressful, and I could study more effectively and make contents with ease.",
    name: "Tope Wilson",
    image: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    alt: "Tope",
  },
  {
    text: "I love the way i can come on here and get to the assurance that any A.I i need for anything i want to do, i get it easily and with just a few clicks. This is a great platform to get to other resources and to make life easier for me. I use for mostly my content making and editing of videos.",
    name: "Angelesse Adrerolle",
    image: "https://randomuser.me/api/portraits/thumb/women/45.jpg",
    alt: "Angelesse",
  },
  {
    text: "My experience writing exams has always been terrible. After getting the right artificial intelligence that would help me with the exams preparations , it was amazing. I totally recommend this platform to anyone that needs an A.I assistant",
    name: "Animashaun Williams",
    image: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
    alt: "Animashaun",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance only on small screens
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    if (!media.matches) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-[20rem] bg-gradient-to-b from-sky-600 to-sky-700 text-white rounded-3xl px-2 py-10 sm:px-4 md:px-10 lg:px-20 w-full">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold mb-8 sm:mb-10">
        Why Use Our Platform?
      </h2>
      {/* Show only one card on small screens, all on md+ */}
      <div className="flex justify-center items-center w-full">
        {/* Mobile/Small screens: show only one card */}
        <div className="w-full max-w-xs sm:max-w-md md:hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="bg-blue-400/30 rounded-xl p-5 sm:p-6 h-auto shadow-lg border border-white/20 backdrop-blur-sm flex flex-col justify-between min-h-[18rem] sm:min-h-[20rem]">
              <p className="mb-4 text-base sm:text-lg leading-relaxed">
                {testimonials[current].text}
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].alt}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 border-2 border-white/30"
                />
                <span className="font-semibold text-base sm:text-lg">
                  {testimonials[current].name}
                </span>
              </div>
            </div>
          </motion.div>
          {/* Dots for navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === current ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Medium and up: show all cards in a row */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-10 md:h-[30rem] md:w-full">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                border: "2px solid #fff",
                borderRadius: "1rem",
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div className="bg-blue-400/30 rounded-xl p-6 h-[30rem] flex flex-col justify-between">
                <p className="mb-4 text-[1.2rem] md:text-[1.5rem] leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 border-2 border-white/30"
                  />
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
