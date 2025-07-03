import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed w-[100%] z-1">
      <div className="flex justify-around h-[80px] items-center px-[33.5px]  bg-[#FFFFFF] border-b-[1.2px] border-[#F2F2F3]">
        <div
          className="flex gap-[9px] items-center"
          onClick={() => navigate("/")}
        >
          <img src="/logo.png" alt="Encore AI Directory Logo" />

          <div className="">
            <h1 className="text-2xl font-black bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
              Encore
            </h1>
          </div>
        </div>

        <div>
          <ul className="flex gap-[1rem]">
            <li className="cursor-pointer" onClick={() => navigate("/explore")}>
              <Typography fontWeight={400} fontSize={14} color="#2B2B33">
                A.I Directory
              </Typography>
            </li>

            <li className="cursor-pointer">
              <Typography fontWeight={400} fontSize={14} color="#2B2B33">
                About Us
              </Typography>
            </li>

            <li className="cursor-pointer">
              <Typography fontWeight={400} fontSize={14} color="#2B2B33">
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>

        <div>
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
    </div>
  );
};

export default Navbar;
