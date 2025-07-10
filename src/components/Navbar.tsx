import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed w-full z-10 bg-white border-b-[1.2px] border-[#F2F2F3]">
      <div className="flex justify-between items-center h-[80px] px-6 md:px-12">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo.png"
            alt="Encore AI Directory Logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-black bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
            Encore
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            <li className="cursor-pointer" onClick={() => navigate("/explore")}>
              <Typography fontWeight={400} fontSize={14} color="#2B2B33">
                AI Directory
              </Typography>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/", { state: { scrollTo: "about" } });
                setMobileOpen(false);
              }}
            >
              <Typography fontWeight={400} fontSize={14} color="#2B2B33">
                About Us
              </Typography>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/", { state: { scrollTo: "contact" } });
                setMobileOpen(false);
              }}
            >
              <Typography fontWeight={400} fontSize={14} color="#2B2B33">
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>

        {!mobileOpen && (
          <div className="hidden md:block">
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
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          <ul className="flex flex-col gap-4 mt-4">
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/explore");
                setMobileOpen(false);
              }}
            >
              AI Directory
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/", { state: { scrollTo: "about" } });
                setMobileOpen(false);
              }}
            >
              About Us
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/", { state: { scrollTo: "contact" } });
                setMobileOpen(false);
              }}
            >
              Contact Us
            </li>
            <Button
              onClick={() => {
                navigate("/explore");
                setMobileOpen(false);
              }}
              fullWidth
              disableElevation
              variant="contained"
              sx={{
                borderRadius: "12px",
                background: "radial-gradient(circle, #2B91EE, #0167C4)",
                textTransform: "capitalize",
              }}
            >
              Explore Tools
            </Button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
