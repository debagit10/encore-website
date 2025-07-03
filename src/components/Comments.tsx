import { Rating, Typography } from "@mui/material";
import React from "react";
import TimeAgo from "../utils/TimeAgo";

const comments = [
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
  {
    id: "12345",
    time: "2025-07-03T13:45:00Z",
    rating: 3,
    message:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
  },
];

const Comments = () => {
  return (
    <div className="w-[1136px]">
      <Typography fontWeight={700} fontSize={20} color="#00000A">
        Comments from others
      </Typography>

      <div className="flex flex-col gap-[21px] mt-[.5rem] h-[500px] overflow-y-auto">
        {comments.map((comment) => (
          <div className="flex flex-col bg-[#FAFAFA] p-[15px] gap-[15px] rounded-[12px] ">
            <div className="flex items-center gap-[.5rem] ">
              <Typography fontWeight={700} fontSize={18} color="#000000">
                User {comment.id}
              </Typography>

              <Typography fontWeight={600} fontSize={14} color="#00000066">
                <TimeAgo timestamp={comment.time} />
              </Typography>
            </div>

            <Rating value={comment.rating} />

            <Typography fontWeight={400} fontSize={16} color="#000000D9">
              {comment.message}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
