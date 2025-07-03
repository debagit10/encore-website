import Navbar from "../components/Navbar";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Rating from "../utils/Rating";

const tools = [
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
  },
];

const ExplorePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col gap-[2rem] pt-[130px]">
        <div className="flex justify-center">
          <div className="bg-[#E7F3FD] px-[12px] py-[6px] w-[146px] text-center rounded-[6px]  ">
            <Typography color="#0167C4" fontWeight={700} fontSize={14}>
              Featured Tools
            </Typography>
          </div>
        </div>

        <div className="relative text-center">
          <Typography fontWeight={700} fontSize={64}>
            Featured{" "}
            <span className="bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
              AI Tools{" "}
            </span>
            Handpicked <br /> for You
          </Typography>

          <div className="absolute -bottom-[3rem] right-[32rem]">
            <img src="/arrow.png" alt="arrow" />
          </div>
        </div>

        <div className="text-center">
          <Typography fontWeight={400} fontSize={24} color="#667085">
            A curated selection of high-performing tools trusted by our
            community and rated for <br /> innovation, usability, and impact.
            Content:
          </Typography>
        </div>
      </div>

      <div className="flex justify-center mt-[2rem]">
        <TextField
          placeholder="What type of A.I Model are you looking for ?"
          variant="outlined"
          sx={{
            width: "950px",
            "& .MuiInputBase-root": {
              backgroundColor: "#F2F2F3",
              borderRadius: "64px",
              border: "none",
              paddingX: "1rem",
              paddingY: ".5rem",
            },
            "& fieldset": {
              border: "none",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img src="/search.png" alt="Search A.I Tool" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="flex justify-center py-[3rem]">
        <div className="grid grid-cols-3 gap-[25px]">
          {tools.map((tool) => (
            <div
              onClick={() => navigate("/view/tool/123")}
              className="group bg-[#F2F2F3] rounded-[25px] flex flex-col items-center text-center gap-[15px] px-[14px] py-[40px] w-[296px] cursor-pointer
            hover:bg-[#E7F3FD] hover:scale-105 hover:border-2 hover:border-[#0167C4] transition-all duration-300 ease-in-out"
            >
              <img src={tool.logo} className="w-[150px] h-[150px]" />

              <Typography
                fontWeight={400}
                fontSize={24}
                className="text-black group-hover:text-[#0167C4]"
              >
                {tool.name}
              </Typography>

              <Rating value={tool.rating} />

              <Typography
                fontWeight={400}
                fontSize={16}
                className="text-[#667085] group-hover:text-[#0167C4]"
              >
                {tool.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ExplorePage;
