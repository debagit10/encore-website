import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const Info = () => {
  return (
    <section>
      <div className="max-h-screen p-6 font-sans flex justify-between mt-20 space-x-6">
        <div className="w-[150rem]">
          <p className="text-[4rem] font-semibold text-gray-900 leading-tight">
            Increase In Productiviy
            <h2 className="text-gray-600 text-[4rem]">
              & Drive Growth
              <img className="inline-block" src="/arrow.png" alt="" />
            </h2>
          </p>
        </div>
        <div className="text-gray-500 mx-auto text-[2rem]">
          Centralise all customers feedback, and instantly categories and
          reveals the underlying drivers of negative customer experiences across
          users <br />
          <button className="mt-6 text-[1.5rem] font-semibold text-gray-800 hover:underline">
            Start Exploring <GoArrowUpRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <img className="h-[100%]" src="/gemni.png" alt="" />
        <img className="h-[100%]" src="chatgpt.png" alt="" />
        <img className="h-[100%]" src="/copilot.png" alt="" />
      </div>
    </section>
  );
};

export default Info;
