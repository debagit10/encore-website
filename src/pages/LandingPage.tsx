import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Typography } from "@mui/material";

import { MdArrowOutward } from "react-icons/md";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const markers = [
  { label: "Unbiased Reviews" },
  { label: "Curated Categories" },
  { label: "Stay Updated" },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Encore AI Directory - Discover the Best AI Tools</title>
      </Helmet>

      <div>
        <Navbar />
      </div>

      <div className="flex justify-center">
        <Hero />
      </div>

      <div className="py-12 flex flex-wrap justify-center gap-4 sm:gap-6">
        {markers.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 border border-[#0167C4] rounded-full h-[42px] sm:h-[63px] transition-all"
          >
            <img
              src="/marker.png"
              alt="Marker"
              className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
            />
            <Typography
              fontWeight={400}
              sx={{
                fontSize: {
                  xs: 13,
                  sm: 16,
                  md: 18,
                },
                color: "#000000",
              }}
            >
              {item.label}
            </Typography>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-[2rem] items-center py-8 md:py-[3rem] px-4">
        <div className="relative inline-block text-center md:text-left">
          <Typography
            sx={{
              background: "linear-gradient(to bottom, #000000, #666666)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 500,
              fontSize: {
                xs: 32,
                sm: 40,
                md: 48,
                lg: 54,
              },
            }}
          >
            Increase In Productivity <br /> & Drive Growth
          </Typography>

          <div className="absolute -top-[.5rem] -right-[.1rem] hidden lg:block">
            <img src="/arrow.png" alt="arrow" />
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-[4rem] text-center md:text-left">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: {
                xs: 14,
                sm: 16,
                md: 18,
                lg: 20,
              },
              color: "#667085",
            }}
          >
            Centralise all customers feedback, and instantly categorise and{" "}
            <br className="hidden sm:block" />
            reveal the underlying drivers of negative customer experiences{" "}
            <br className="hidden sm:block" />
            across users
          </Typography>

          <div
            className="flex gap-2 items-center justify-center md:justify-start cursor-pointer"
            onClick={() => navigate("/explore")}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: 15,
                  sm: 16,
                  md: 17,
                },
                color: "#55555C",
              }}
            >
              Start exploring
            </Typography>

            <MdArrowOutward className="w-4 h-4 sm:w-5 sm:h-5 text-[#55555C]" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex justify-end gap-[20px] py-[3rem] ">
          <img src="/gemini.png" />
          <img src="/chatgpt.png" />
          <img src="/copilot.png" />
        </div>
      </div>

      <div className="shadow-2xl shadow-[#2B91EE29] lg:pt-[3rem]">
        <About />
      </div>

      <div className="py-[3rem]">
        <Testimonials />
      </div>

      <div className="py-[3rem] flex justify-center">
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
