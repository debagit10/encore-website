import { Rating, Typography, Skeleton, Box } from "@mui/material";
import { useEffect, useState } from "react";
import TimeAgo from "../utils/TimeAgo";
import api from "../utils/axiosInstance";
import { useParams } from "react-router-dom";

interface Reviews {
  _id: string;
  message: string;
  rating: number;
  toolId: string;
  createdAt: string;
}

const Comments = () => {
  const [reviews, setReviews] = useState<Reviews[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  const getReviews = async () => {
    setLoading(true);

    try {
      const response = await api.get(`/api/review/tool/${id}`);
      if (response.data.success) {
        setReviews(response.data.data);
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReviews();
  }, [id]);

  const renderSkeletons = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <Box
        key={index}
        sx={{
          backgroundColor: "#FAFAFA",
          padding: "15px",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Skeleton variant="text" width={100} height={24} />
          <Skeleton variant="text" width={60} height={20} />
        </Box>

        <Skeleton variant="rectangular" width={120} height={24} />
        <Skeleton variant="text" height={20} width="100%" />
        <Skeleton variant="text" height={20} width="80%" />
      </Box>
    ));
  };

  return (
    <div className="w-[1136px]">
      <Typography fontWeight={700} fontSize={20} color="#00000A">
        Comments from others
      </Typography>

      <div className="flex flex-col gap-[21px] mt-[.5rem] h-[500px] overflow-y-auto">
        {loading
          ? renderSkeletons()
          : reviews?.map((review) => (
              <div
                key={review._id}
                className="flex flex-col bg-[#FAFAFA] p-[15px] gap-[15px] rounded-[12px]"
              >
                <div className="flex items-center gap-[.5rem]">
                  <Typography fontWeight={700} fontSize={18} color="#000000">
                    #C-{review._id.slice(-6)}
                  </Typography>

                  <Typography fontWeight={600} fontSize={14} color="#00000066">
                    <TimeAgo timestamp={review.createdAt} />
                  </Typography>
                </div>

                <Rating value={review.rating} readOnly />

                <Typography fontWeight={400} fontSize={16} color="#000000D9">
                  {review.message}
                </Typography>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
