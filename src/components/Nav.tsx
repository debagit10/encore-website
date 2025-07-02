import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="p-4 sm:p-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-[#0167C4] text-lg sm:text-xl md:text-2xl lg:text-[24px] font-bold flex items-center space-x-2 gap-2.5">
            <img
              src="/logo.jpg"
              alt="Encore Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            <div className="hidden md:block">Encore</div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 lg:gap-3.5 text-sm lg:text-base">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                A.I Directory
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <button className="bg-[#0167C4] text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 lg:h-[4rem] lg:w-[10rem] rounded-[0.75rem] hover:bg-blue-700 transition-colors text-sm lg:text-base">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4 text-center">
              <li>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-blue-700 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  A.I Directory
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-blue-700 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-blue-700 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="mt-4 text-center">
              <button
                className="bg-[#0167C4] text-white px-6 py-3 rounded-[0.75rem] hover:bg-blue-700 transition-colors w-full max-w-xs"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
