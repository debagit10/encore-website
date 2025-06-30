import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-[#0167C4] text-[24px] font-bold flex items-center space-x-2 gap-2.5">
            <img src="/logo.jpg" alt="" />
            Encore
          </div>
          <ul className="flex space-x-4 gap-3.5">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700">
                A.I Directory
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700">
                Contact Us
              </a>
            </li>
          </ul>
          <div>
            <button className="bg-[#0167C4] text-white px-8 py-4 h-[4rem] w-[10rem] rounded-[0.75rem] hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
