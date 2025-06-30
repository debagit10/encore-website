import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="w-full h-full p-10 flex flex-col items-start justify-center">
        <h2 className="text-[5rem] font-bold text-[#0e70cb] mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-6 text-[2rem]">
          We are always available to assist you with your inquiries:
        </p>

        <div className="mt-10 flex items-center text-sky-600 mb-4 text-[2.5rem]">
          <FiSmartphone className="mr-2" />
          <a href="tel:+2347034504663" className="hover:underline font-medium">
            +234 70 3450 4663
          </a>
        </div>

        <div className="flex items-center text-sky-600 mb-6 text-[2.5rem]">
          <FaEnvelope className="mr-2" />
          <a
            href="mailto:info@encoredirectories.org"
            className="hover:underline font-medium"
          >
            info@encoredirectories.org
          </a>
        </div>

        <div className="flex flex-col items-start w-full mt-10">
          <input
            placeholder="Type in your thoughts......"
            className="w-[70%] h-[12rem] p-4 rounded-xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[1.5rem] mb-4"
          ></input>
          <button className="mt-4 w-[70%] h-[4rem] bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 rounded-full shadow">
            Send a Mail
          </button>
        </div>
      </div>

      <div>
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
