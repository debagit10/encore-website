import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="mt-[20rem] bg-gradient-to-b from-sky-600 to-sky-700 text-white rounded-3xl p-10 w-[100%]">
      <h2 className="text-center text-[3rem] font-bold mb-10">
        Why Use Our Platform?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 h-[30rem] w-[100%]">
        <motion.div
          whileHover={{
            border: "2px solid #fff",
            borderRadius: "1rem",
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <div className="bg-blue-400/30 rounded-xl p-6 h-[30rem]">
            <p className="mb-4 text-[1.5rem]">
              I am so glad I came across Encore at the time I did. It made
              preparing for my Unified A.I Directory less stressful, and I could
              study more effectively and make contents with ease.
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/thumb/men/22.jpg"
                alt="Tope"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="font-semibold">Tope Wilson</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            border: "2px solid #fff",
            borderRadius: "1rem",
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <div className="bg-blue-400/30 rounded-xl p-6 h-[30rem] ">
            <p className="mb-4 text-[1.5rem]">
              I love the way i can come on here and get to the assurance that
              any A.I i need for anything i want to do, i get it easily and with
              just a few clicks. This is a great platform to get to other
              resources and to make life easier for me. I use for mostly my
              content making and editing of videos.
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/thumb/women/45.jpg"
                alt="Angelesse"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="font-semibold">Angelesse Adrerolle</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{
            border: "2px solid #fff",
            borderRadius: "1rem",
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <div className="bg-blue-400/30 rounded-xl p-6 h-[30rem]">
            <p className="mb-4 text-[1.5rem]">
              My experience writing exams has always been terrible. After
              getting the right artificial intelligence that would help me with
              the exams preparations , it was amazing. I totally recommend this
              platform to anyone that needs an A.I assistant
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/thumb/men/55.jpg"
                alt="Animashaun"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="font-semibold">Animashaun Williams</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
