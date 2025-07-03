import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-[3rem] mb-[1rem] bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 rounded-[32px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-10">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <div>
              <img
                src="/Logomark Charcoal Navy 1.png"
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] ml-2 sm:ml-3 font-semibold">
              Encore
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-[1.5rem] mt-3 sm:mt-4 lg:mt-5 text-white/80 leading-relaxed w-full lg:w-[60%]">
            At Encore, we believe everyone deserves the best chance possible to
            be more Productive. We are driven to provide innovations through
            technology that makes learning, assistance and other productive
            activity convenient and accessible.
          </p>

          <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-5 lg:mt-6 text-black text-base sm:text-lg lg:text-[1.5rem]">
            <FaFacebookF className="hover:text-gray-500 cursor-pointer rounded-full bg-white w-8 h-8 sm:w-9 sm:h-9 lg:w-8 lg:h-8 p-1.5 sm:p-2 lg:p-1" />
            <FaTwitter className="hover:text-gray-500 cursor-pointer rounded-full bg-white w-8 h-8 sm:w-9 sm:h-9 lg:w-8 lg:h-8 p-1.5 sm:p-2 lg:p-1" />
            <FaInstagram className="hover:text-gray-500 cursor-pointer rounded-full bg-white w-8 h-8 sm:w-9 sm:h-9 lg:w-8 lg:h-8 p-1.5 sm:p-2 lg:p-1" />
            <FaLinkedinIn className="hover:text-gray-500 cursor-pointer rounded-full bg-white w-8 h-8 sm:w-9 sm:h-9 lg:w-8 lg:h-8 p-1.5 sm:p-2 lg:p-1" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-base md:text-lg lg:text-[1.5rem]">
          <div className="min-w-0">
            <h3 className="font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:underline break-words">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline break-words">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline break-words">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:underline break-words">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline break-words">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 sm:my-7 lg:my-8 border-white/30" />

      <div className="text-center text-xs sm:text-sm lg:text-[1rem] text-white/60">
        All copyright reserved for Encore 2025
      </div>
    </footer>
  );
};

export default Footer;
