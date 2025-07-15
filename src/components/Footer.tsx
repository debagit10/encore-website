import { Tooltip } from "@mui/material";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

const socials = [
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/profile.php?id=61577730762988&mibextid=ZbWKwL",
    name: "Facebook",
  },

  {
    icon: FaInstagram,
    link: "https://www.instagram.com/techistryintegrated?igsh=MWR1bHJqd2pta29tYg==",
    name: "Instagram",
  },

  {
    icon: FaTiktok,
    link: "https://www.tiktok.com/@techistryintegrated?_t=ZM-8y3H2pHRWvI&_r=1",
    name: "TikTok",
  },

  {
    icon: FaXTwitter,
    link: "https://x.com/techistryi?t=0Kpz5WuqfHU-Us3v0SXOLQ&s=08",
    name: "X (Twitter)",
  },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] text-white px-4 sm:px-6 md:px-8 lg:px-20 py-10 rounded-[32px] mx-4 sm:mx-6 md:mx-10 lg:mx-[1rem] mb-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-5">
            <img
              src="/Logomark Charcoal Navy 1.png"
              alt="Encore Logo"
              className="w-10 h-10"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Encore
            </h2>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-xl">
            At Encore, we believe everyone deserves the best chance possible to
            be more productive. We are driven to provide innovations through
            technology that make learning, assistance, and productivity
            convenient and accessible.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Tooltip title={social.name} key={index}>
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                </Tooltip>
              );
            })}
          </div>
        </div>

        {/* Right section */}
        <div className="grid grid-cols-2 gap-6 sm:gap-10 text-sm sm:text-base lg:text-lg mt-8 lg:mt-0">
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li
                className="cursor-pointer hover:underline underline-offset-4"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </li>
              <li
                className="cursor-pointer hover:underline underline-offset-4"
                onClick={() => {
                  navigate("/", { state: { scrollTo: "about" } });
                }}
              >
                About us
              </li>
              <li className="cursor-pointer hover:underline underline-offset-4">
                FAQs
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-white/80">
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
          </div> */}
        </div>
      </div>

      <hr className="my-8 border-white/30" />

      <div className="text-center text-xs sm:text-sm text-white/60">
        All rights reserved © Encore 2025
      </div>
    </footer>
  );
};

export default Footer;
