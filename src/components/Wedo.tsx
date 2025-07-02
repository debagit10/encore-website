import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const Wedo = () => {
  const tool = [
    { id: 1, src: "/claude.png", alt: "Claude" },
    { id: 2, src: "/deep.png", alt: "Deep" },
    { id: 3, src: "/chat.png", alt: "Chat" },
  ];

  return (
    <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center px-4 sm:px-6 md:px-8">
      <div className="w-full">
        <div className="bg-blue-100 text-blue-700 font-semibold text-sm sm:text-base md:text-lg lg:text-[20px] w-fit px-3 py-1 rounded-md mb-6 sm:mb-8 md:mb-12 lg:mb-[3rem]">
          WHAT WE DO
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[3rem] text-gray-900 mb-6 sm:mb-8 md:mb-12 lg:mb-[3rem] leading-tight w-full lg:w-[55rem] py-1">
          We simplify AI discovery by organizing tools, enabling informed
          choices through community insights, and showcasing innovations shaping
          the future.
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8 md:mb-12 lg:mb-[3rem] py-1 w-full lg:w-[45rem]">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/thumb/men/${
                  i + 10
                }.jpg`}
                alt="user"
                className="rounded-full border-2 border-white shadow w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
            ))}
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-[1.5rem] text-gray-500">
            Loved by 500+ Students and Developers
          </p>
        </div>
        <button className="mt-8 sm:mt-12 md:mt-16 lg:mt-[4rem] bg-gradient-to-b from-sky-500 to-blue-500 hover:bg-blue-700 text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg shadow-md transition text-sm sm:text-base md:text-lg w-full sm:w-auto">
          Start Exploring <GoArrowUpRight className="inline-block ml-2" />
        </button>
      </div>

      {/* Images hidden on small screens, shown on lg+ */}
      <div className="hidden lg:block relative rounded-2xl space-y-4 ml-[8rem] size-100">
        {tool.map((item, index) => (
          <motion.div
            key={item.id}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 1.5,
              ease: "easeInOut",
            }}
            className="p-4 cursor-pointer overflow-hidden relative"
          >
            <img src={item.src} alt={item.alt} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Wedo;
