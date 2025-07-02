import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Info = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 align-text-top">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mt-12 sm:mt-16 md:mt-20 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] font-semibold text-gray-900 leading-tight">
            Increase In Productivity
            <span className="block text-gray-600 text-2xl sm:text-3xl md:text-4xl lg:text-[4rem]">
              & Drive Growth
              <img
                className="inline-block ml-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-auto lg:h-auto"
                src="/arrow.png"
                alt="Arrow icon"
              />
            </span>
          </h1>
        </div>
        <div className="w-full lg:w-[40%] text-gray-500 text-sm sm:text-base md:text-lg lg:text-[2rem] leading-relaxed">
          <p className="mb-4 sm:mb-6">
            Centralise all customers feedback, and instantly categories and
            reveals the underlying drivers of negative customer experiences
            across users
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg shadow-md transition-colors duration-200 text-sm sm:text-base md:text-lg lg:text-[1.5rem] w-full sm:w-auto">
            Start Exploring <GoArrowUpRight className="inline-block ml-2" />
          </button>
        </div>
      </div>

      {/* Images hidden on small screens, shown on md+ */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
        <img
          className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          src="/gemni.png"
          alt="Gemini AI tool"
        />
        <img
          className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          src="/chatgpt.png"
          alt="ChatGPT AI tool"
        />
        <img
          className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          src="/copilot.png"
          alt="GitHub Copilot AI tool"
        />
      </div>
    </section>
  );
};

export default Info;
