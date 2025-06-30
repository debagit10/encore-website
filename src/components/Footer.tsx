import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-[3rem] bg-gradient-to-b from-[#007CF0] to-[#005FCC] text-white px-6 md:px-20 py-12 rounded-t-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <div>
              <img src="/Logomark Charcoal Navy 1.png" alt="" />
              <div />
            </div>
            <h2 className="text-[2.5rem] ml-3 font-semibold">Encore</h2>
          </div>
          <p className="text-[1.5rem] mt-5 text-white/80 leading-relaxed w-[60%]">
            At Encore, we believe everyone deserves the best chance possible to
            be more Productive. We are driven to provide innovations through
            technology that makes learning, assistance and other productive
            activity convenient and accessible.
          </p>

          <div className="flex gap-4 mt-6 text-black text-[1.5rem]">
            <FaFacebookF className="hover:text-gray-500 cursor-pointer rounded-full bg-white size-[2rem] p-1" />
            <FaTwitter className="hover:text-gray-500 cursor-pointer rounded-full bg-white size-[2rem] p-1" />
            <FaInstagram className="hover:text-gray-500 cursor-pointer rounded-full bg-white size-[2rem] p-1" />
            <FaLinkedinIn className="hover:text-gray-500 cursor-pointer rounded-full bg-white size-[2rem] p-1" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 mt-10 text-[1.5rem]">
          <div>
            <h3 className="font-semibold  mb-4">Quick Links</h3>
            <ul className="space-y-2  text-white/80">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold  mb-4">Support</h3>
            <ul className="space-y-2  text-white/80">
              <li>
                <a href="#" className="hover:underline">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-8 border-white/30" />

      <div className="text-center text-[1rem] text-white/60">
        All copyright reserved for Encore 2025
      </div>
    </footer>
  );
};

export default Footer;
