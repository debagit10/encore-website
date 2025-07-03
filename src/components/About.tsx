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
    <section className="flex gap-[2rem] items-center justify-center">
      <div className="flex flex-col gap-[25px]">
        <div className="bg-[#E7F3FD] px-[12px] py-[6px] w-[119px] rounded-[6px]  ">
          <Typography color="#0167C4" fontWeight={700} fontSize={14}>
            WHAT WE DO
          </Typography>
        </div>
        <Typography
          fontWeight={400}
          fontSize={36}
          color="#302F37"
          lineHeight="160%"
        >
          We simplify AI discovery by organizing <br /> tools, enabling informed
          choices through <br /> community insights, and showcasing <br />{" "}
          innovations shaping the future.
        </Typography>

        <Button
          onClick={() => navigate("/explore")}
          endIcon={<MdArrowOutward />}
          disableElevation
          variant="contained"
          sx={{
            width: "165px",
            padding: "17px",
            borderRadius: "12px",
            background: "radial-gradient(circle, #2B91EE, #0167C4)",
            textTransform: "capitalize",
          }}
        >
          Start Exploring
        </Button>
      </div>

      {/* Images hidden on small screens, shown on lg+ */}
      <div className="flex flex-col gap-[15px]">
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
            className="p-4 cursor-pointer overflow-hidden relative"
          >
            <img src={item.src} alt={item.alt} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
