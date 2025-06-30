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
    <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items">
      <div>
        <div className=" bg-blue-100 text-blue-700 font-semibold text-[20px]font-semibold w-fit px-3 py-1 rounded-md mb-[3rem]">
          WHAT WE DO
        </div>
        <h2 className="text-[3rem] text-gray-900 mb-4 w-[55rem]">
          We simplify AI discovery by organizing tools, enabling informed
          choices through community insights, and showcasing innovations shaping
          the future.
        </h2>
        <div className="flex items-center justify-between space-x-4 mt-6 w-[45rem]">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/thumb/men/${
                  i + 10
                }.jpg`}
                alt="user"
                className=" rounded-full border-2 border-white shadow size-14"
              />
            ))}
          </div>
          <p className="text-[1.5rem] text-gray-500 ">
            Loved by 500+ Students and Developers
          </p>
        </div>
        <button className=" mt-[4rem] bg-gradient-to-b from-sky-500 to-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
          Start Exploring <GoArrowUpRight className="inline-block ml-2" />
        </button>
      </div>
      <div className="relative rounded-2xl space-y-4 ml-[8rem] size-100">
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
