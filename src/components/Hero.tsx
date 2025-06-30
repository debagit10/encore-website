import React from "react";

const Hero = () => {
  return (
    <section className="max-h-screen flex flex-col items-center justify-center mt-20 ">
      <div className="h-[3rem] w-[10rem] px-2 py-1.5 bg-blue-100 text-blue-700 font-semibold text-[20px] rounded-[0.75rem] flex items-center justify-center">
        WELCOME
      </div>
      <h1 className="text-[5rem] font-bold text-gray-900 leading-tight text-center">
        Discover <span className="text-blue-500">The Best AI Tools</span>, Read
        Honest Reviews, And Make Smarter Tech Choices Today.
      </h1>
      <div className="flex items-center justify-center space-x-4 gap-4 mt-8">
        <img src="/Group 8.png" alt="..." />
        <div className="h-[2rem] w-[6rem] px-2 py-1.5 bg-blue-100 text-blue-800 text-[14px] rounded-[0.75rem] flex items-center justify-center">
          +40 more
        </div>
      </div>
      <p className="text-gray-500 my-8 text-[30px] text-center">
        Browse top-rated AI tools with detailed reviews, user <br /> ratings,
        and categories.
      </p>
      <button className="bg-gradient-to-b from-sky-500 to-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
        Explore Tools
      </button>
      <div className="flex items-center justify-center space-x-4 gap-4 mt-8">
        <button className="flex items-center gap-3 border border-blue-300 text-[18px] rounded-full px-5 py-3 shadow-sm">
          <img src="/mini.png" alt="" />
          Unbiased Reviews
        </button>
        <button className="flex items-center gap-3 border border-blue-300 text-[18px] rounded-full px-5 py-3 shadow-sm">
          <img src="/mini.png" alt="" />
          Curated Categories
        </button>
        <button className="flex items-center gap-3 border border-blue-300 text-[18px] rounded-full px-5 py-3 shadow-sm">
          <img src="/mini.png" alt="" />
          Stay Updated
        </button>
      </div>
    </section>
  );
};

export default Hero;
