import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center px-4 sm:px-6 md:px-8">
      <div className="w-full h-full p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-start justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[5rem] font-bold text-[#0e70cb] mb-2 leading-tight">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-[2rem] leading-relaxed">
          We are always available to assist you with your inquiries:
        </p>

        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex items-center text-sky-600 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg lg:text-[2.5rem]">
          <FiSmartphone className="mr-2 flex-shrink-0" />
          <a
            href="tel:+2347034504663"
            className="hover:underline font-medium break-all sm:break-normal"
          >
            +234 70 3450 4663
          </a>
        </div>

        <div className="flex items-center text-sky-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-[2.5rem]">
          <FaEnvelope className="mr-2 flex-shrink-0" />
          <a
            href="mailto:info@encoredirectories.org"
            className="hover:underline font-medium break-all sm:break-normal"
          >
            info@encoredirectories.org
          </a>
        </div>

        <div className="flex flex-col items-start w-full mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <textarea
            placeholder="Type in your thoughts......"
            className="w-full sm:w-[85%] md:w-[80%] lg:w-[70%] h-24 sm:h-32 md:h-40 lg:h-[12rem] p-3 sm:p-4 rounded-xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base md:text-lg lg:text-[1.5rem] mb-3 sm:mb-4 resize-none"
          />
          <button className="mt-2 sm:mt-4 w-full sm:w-[85%] md:w-[80%] lg:w-[70%] h-12 sm:h-14 md:h-16 lg:h-[4rem] bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 rounded-full shadow text-sm sm:text-base md:text-lg lg:text-xl transition-colors duration-200">
            Send a Mail
          </button>
        </div>
      </div>

      <div className="hidden lg:block">
        <img
          src="/contact.png"
          alt="Customer support"
          className="w-full h-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
};

export default Contact;
