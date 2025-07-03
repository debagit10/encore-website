import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Typography } from "@mui/material";

import { MdArrowOutward } from "react-icons/md";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const markers = [
  { label: "Unbiased Reviews" },
  { label: "Curated Categories" },
  { label: "Stay Updated" },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="flex justify-center">
        <Hero />
      </div>

      <div className="py-[3rem] flex gap-[3rem] justify-center">
        {markers.map((item) => (
          <div className="flex gap-[15px] pl-[.5rem] pr-[1rem]  border-[0.34px] rounded-[34313.73px] border-[#0167C4] items-center  h-[63px]">
            <img src="/marker.png" />
            <Typography fontWeight={400} fontSize={18} color="#000000">
              {item.label}
            </Typography>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-[2rem] items-center py-[3rem]">
        <div className="relative inline-block">
          <Typography
            sx={{
              background: "linear-gradient(to bottom, #000000, #666666)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            fontWeight={500}
            fontSize={54}
          >
            Increase In Productiviy <br /> & Drive Growth{" "}
          </Typography>

          <div className="absolute -top-[.5rem] -right-[.1rem]">
            <img src="/arrow.png" alt="arrow" />
          </div>
        </div>

        <div className="flex flex-col gap-[4rem]">
          <Typography fontWeight={400} fontSize={20} color="#667085">
            Centralise all customers feedback, and instantly categories and{" "}
            <br />
            reveals the underlying drivers of negative customer experiences{" "}
            <br />
            across users
          </Typography>

          <div
            className="flex gap-[.5rem] items-center cursor-pointer"
            onClick={() => navigate("/explore")}
          >
            <Typography color="#55555C" fontWeight={700} fontSize={17}>
              Start exploring
            </Typography>

            <MdArrowOutward className="h-[20px] w-[20px] text-[#55555C]" />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-[20px] py-[3rem]">
        <img src="/gemini.png" />
        <img src="/chatgpt.png" />
        <img src="/copilot.png" />
      </div>

      <div className="shadow-2xl shadow-[#2B91EE29] pt-[3rem]">
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
