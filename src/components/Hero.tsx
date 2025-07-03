import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 pt-28 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36">
      {/* Welcome Badge */}
      <div className="flex justify-center">
        <div className="bg-[#E7F3FD] px-3 py-1.5 w-fit rounded-[6px]">
          <Typography
            sx={{ color: "#0167C4", fontWeight: 700, fontSize: "14px" }}
          >
            WELCOME
          </Typography>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center">
        <Typography
          fontWeight={700}
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "4rem",
            },
            lineHeight: 1.2,
          }}
        >
          Discover{" "}
          <span className="bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
            The Best AI Tools
          </span>
          , Read <br className="hidden sm:block" /> Honest Reviews, And Make{" "}
          <br className="hidden sm:block" /> Smarter Tech Choices Today.
        </Typography>
      </div>

      {/* Image and Badge */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        <img
          src="/tool_group.png"
          alt="Group of AI tools"
          className="max-w-[90%] sm:max-w-[400px] h-auto"
        />
        <div className="bg-[#E7F3FD] px-2.5 py-1 w-fit rounded-[6px]">
          <Typography
            sx={{ color: "#0167C4", fontWeight: 500, fontSize: "12px" }}
          >
            +40 More
          </Typography>
        </div>
      </div>

      {/* Subheading */}
      <div className="text-center">
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: {
              xs: "1rem",
              sm: "1.125rem",
              md: "1.25rem",
            },
            color: "#667085",
          }}
        >
          Browse top-rated AI tools with detailed reviews, user{" "}
          <br className="hidden sm:block" /> ratings, and categories.
        </Typography>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <Button
          onClick={() => navigate("/explore")}
          disableElevation
          variant="contained"
          sx={{
            width: "165px",
            padding: "17px",
            borderRadius: "12px",
            background: "radial-gradient(circle, #2B91EE, #0167C4)",
            textTransform: "capitalize",
            fontSize: "1rem",
          }}
        >
          Explore Tools
        </Button>
      </div>
    </div>
  );
};

export default Hero;
