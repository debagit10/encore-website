import { motion } from "framer-motion";
import { Button, Typography } from "@mui/material";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const tool = [
    { id: 1, src: "/claude.png", alt: "Claude" },
    { id: 2, src: "/deep.png", alt: "Deep" },
    { id: 3, src: "/chat.png", alt: "Chat" },
  ];

  return (
    <section
      className="flex flex-col lg:flex-row gap-6 md:gap-[2rem] items-center justify-center px-4 py-8 md:py-16"
      id="about"
    >
      <div className="flex flex-col gap-6 md:gap-[25px] max-w-xl text-center lg:text-left">
        <div className="bg-[#E7F3FD] px-3 py-1.5 w-max rounded-[6px] mx-auto lg:mx-0">
          <Typography
            color="#0167C4"
            fontWeight={700}
            sx={{ fontSize: { xs: 12, sm: 13, md: 14 } }}
          >
            WHAT WE DO
          </Typography>
        </div>

        <Typography
          fontWeight={400}
          sx={{
            fontSize: { xs: 22, sm: 28, md: 32, lg: 36 },
            lineHeight: "160%",
            color: "#302F37",
          }}
        >
          We simplify AI discovery by organizing tools, enabling informed
          choices through community insights, and showcasing innovations shaping
          the future.
        </Typography>

        <Button
          onClick={() => navigate("/explore")}
          endIcon={<MdArrowOutward />}
          disableElevation
          variant="contained"
          sx={{
            width: "165px",
            padding: "14px",
            borderRadius: "12px",
            background: "radial-gradient(circle, #2B91EE, #0167C4)",
            textTransform: "capitalize",
            mx: { xs: "auto", lg: "0" },
          }}
        >
          Start Exploring
        </Button>
      </div>

      {/* Images only shown on lg and above */}
      <div className="">
        <div className="flex lg:flex-col flex-row lg:gap-[15px] gap-[5px] ">
          {tool.map((item, index) => (
            <motion.div
              key={item.id}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: index * 1.5,
                ease: "easeInOut",
              }}
              className="cursor-pointer overflow-hidden relative"
            >
              <img src={item.src} alt={item.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
