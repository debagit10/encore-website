import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Button, TextField, Typography } from "@mui/material";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Comments from "../components/Comments";
import Footer from "../components/Footer";

const View_Tool = () => {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="flex justify-center text-center pt-[130px]">
        <div className="flex flex-col gap-[2rem] ">
          <div className="flex gap-[11px] justify-center items-center">
            <img src="/logo.png" className="w-[49px] h-[49px] " />
            <h1 className="text-[36px] font-bold bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
              Chat GPT
            </h1>

            <div className="flex items-center">
              (4
              <AiFillStar className="text-[#FDB022]" />)
            </div>
          </div>

          <Typography fontWeight={400} fontSize={20} color="#2B2B33">
            Kindly rate this Artificial Intelligence based on your experience
          </Typography>

          <div className="flex justify-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                className="text-[#FDB022] text-2xl cursor-pointer transition-transform hover:scale-125"
              >
                {star <= (hoveredStar || rating) ? (
                  <AiFillStar />
                ) : (
                  <AiOutlineStar />
                )}
              </span>
            ))}
          </div>

          <Typography fontWeight={400} fontSize={20} color="#2B2B33">
            Leave a comment to let us know what you think
          </Typography>

          <TextField
            placeholder="Type in your thoughts......"
            multiline
            rows={6}
            variant="outlined"
            sx={{
              width: "800px",
              height: "141px",
              "& .MuiInputBase-root": {
                height: "100%",
                backgroundColor: "#F2F2F3",
                borderRadius: "32px",
                border: "none",
                padding: "2rem",
              },
              "& fieldset": {
                border: "none",
              },
            }}
          />

          <div className="flex justify-center">
            <Button
              disableElevation
              variant="contained"
              sx={{
                width: "460px",
                height: "56px",
                borderRadius: "34313.73px",
                background: "radial-gradient(circle, #2B91EE, #0167C4)",
                textTransform: "capitalize",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-[3rem]">
        <Comments />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default View_Tool;
