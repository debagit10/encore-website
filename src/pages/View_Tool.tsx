import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Button, TextField, Typography } from "@mui/material";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Comments from "../components/Comments";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import api from "../utils/axiosInstance";
import Toast from "../utils/Toast";

interface Category {
  _id: string;
  name: string;
}

interface ToolDetails {
  name: string;
  description: string;
  category_id: Category;
  image: string;
  demo_url: string;
  _id: string;
  averageRating: number;
}

interface ToastState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "error" | "warning";
}

const View_Tool = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [hoveredStar, setHoveredStar] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  const [toolData, setToolData] = useState<ToolDetails>({
    name: "",
    description: "",
    demo_url: "",
    image: "",
    _id: "",
    category_id: { _id: "", name: "" },
    averageRating: 0,
  });

  const [toast, setToast] = useState<ToastState>({
    open: false,
    message: "",
    severity: "info",
  });

  const showToast = (message: string, severity: ToastState["severity"]) => {
    setToast({ open: true, message, severity });
  };

  const handleCloseToast = () => {
    setToast((prev) => ({ ...prev, open: false }));
    setLoading(false);
  };

  const getTool = async () => {
    setLoading(true);

    try {
      const response = await api.get(`/api/tool/${id}`);
      if (response.data.success) {
        setToolData(response.data.data);
        return;
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const reviewData = {
    rating,
    message,
    toolId: toolData._id,
    categoryId: toolData.category_id._id,
  };

  const submit = async () => {
    setLoading(true);

    try {
      const response = await api.post(`/api/review/add`, reviewData);
      if (response.data.success) {
        showToast(response.data.message, "success");
      }
    } catch (error: any) {
      if (error.response.data.error) {
        console.log(error);
        setLoading(false);
        showToast(error.response.data.error, "error");
        return;
      }
    }
  };

  const trackVisit = async () => {
    try {
      await api.post(`/api/track-visits/${toolData._id}`);
    } catch (error: any) {
      if (error.response.data.error) {
        console.log(error);

        showToast("Cannot visit", "error");
        return;
      }
    }
  };

  useEffect(() => {
    getTool();
  }, []);

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
        <Toast
          open={toast.open}
          message={toast.message}
          severity={toast.severity}
          onClose={handleCloseToast}
        />
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
            <img
              src={toolDatAImage}
              className="w-[49px] h-[49px]"
              alt={`Logo for ${toolData.name}`}
            />
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
              {toolData.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              ({toolData.averageRating}
              <AiFillStar className="text-[#FDB022]" />)
            </Box>
          </Box>

          <div className="flex justify-center">
            <div className="bg-[#E7F3FD] px-4 py-1.5 w-fit text-center rounded-[6px] ">
              <a href={toolData.demo_url} target="_blank" onClick={trackVisit}>
                <Typography
                  sx={{ color: "#0167C4", fontWeight: 700, fontSize: 14 }}
                >
                  Visit
                </Typography>
              </a>
            </div>
          </div>

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
              onChange={(e) => setMessage(e.target.value)}
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
              disabled={!message || loading}
              onClick={submit}
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
              {loading ? "Submitting..." : "Submit"}
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
