import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Button, TextField, Typography } from "@mui/material";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Comments from "../components/Comments";
import Footer from "../components/Footer";

const View_Tool = () => {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  return (
    <div>
      <Navbar />

      <Box
        sx={{
          pt: { xs: "100px", sm: "120px", md: "130px" },
          px: 2,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          {/* Logo + Title + Rating */}
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img src="/logo.png" className="w-[49px] h-[49px]" alt="Logo" />
            <Typography
              sx={{
                fontSize: { xs: 28, sm: 36 },
                fontWeight: "bold",
                background:
                  "radial-gradient(circle at center, #2B91EE, #0167C4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Chat GPT
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              (4
              <AiFillStar className="text-[#FDB022]" />)
            </Box>
          </Box>

          {/* Rating Instruction */}
          <Typography
            fontWeight={400}
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#2B2B33"
          >
            Kindly rate this Artificial Intelligence based on your experience
          </Typography>

          {/* Star Rating */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
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
          </Box>

          {/* Comment Instruction */}
          <Typography
            fontWeight={400}
            fontSize={{ xs: 16, sm: 18, md: 20 }}
            color="#2B2B33"
          >
            Leave a comment to let us know what you think
          </Typography>

          {/* Text Area */}
          <Box sx={{ px: { xs: 0, sm: 4 } }}>
            <TextField
              placeholder="Type in your thoughts......"
              multiline
              rows={6}
              fullWidth
              variant="outlined"
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  backgroundColor: "#F2F2F3",
                  borderRadius: "32px",
                  border: "none",
                  padding: "1.5rem",
                },
                "& fieldset": {
                  border: "none",
                },
              }}
            />
          </Box>

          {/* Submit Button */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              disableElevation
              variant="contained"
              sx={{
                width: { xs: "100%", sm: "70%", md: "460px" },
                height: "56px",
                borderRadius: "34313.73px",
                background: "radial-gradient(circle, #2B91EE, #0167C4)",
                textTransform: "capitalize",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Comments */}
      <Box
        sx={{
          py: { xs: "2rem", md: "3rem" },
          px: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Comments />
      </Box>

      <Footer />
    </div>
  );
};

export default View_Tool;
