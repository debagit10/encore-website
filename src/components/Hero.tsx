import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[2rem] pt-[130px]">
      <div className="flex justify-center">
        <div className="bg-[#E7F3FD] px-[12px] py-[6px] w-[97px] rounded-[6px]  ">
          <Typography color="#0167C4" fontWeight={700} fontSize={14}>
            WELCOME
          </Typography>
        </div>
      </div>

      <div className="text-center">
        <Typography fontWeight={700} fontSize={64}>
          Discover{" "}
          <span className="bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
            The Best AI Tools
          </span>
          , Read <br /> Honest Reviews, And Make <br /> Smarter Tech Choices
          Today.
        </Typography>
      </div>

      <div className="flex items-center justify-center">
        <img src="/tool_group.png" alt="Group of AI tools" />
        <div className="bg-[#E7F3FD] px-[10px] py-[4px] w-[76px] rounded-[6px]   ">
          <Typography color="#0167C4" fontWeight={500} fontSize={12}>
            +40 More
          </Typography>
        </div>
      </div>

      <div className="text-center">
        <Typography fontWeight={400} fontSize={24} color="#667085">
          Browse top-rated AI tools with detailed reviews, user <br /> ratings,
          and categories.
        </Typography>
      </div>

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
          }}
        >
          Explore Tools
        </Button>
      </div>
    </div>
  );
};

export default Hero;
