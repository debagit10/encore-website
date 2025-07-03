import { Avatar, Typography } from "@mui/material";

const testimonials = [
  {
    message:
      "I am so glad I came across Encore at the time I did. It made preparing for my Unified A.I Directory less stressful, and I could study more effectively and make contents with ease.",
    name: "Tope Wilson",
    image: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    alt: "Tope",
  },
  {
    message:
      "I love the way i can come on here and get to the assurance that any A.I i need for anything i want to do, i get it easily and with just a few clicks. This is a great platform to get to other resources and to make life easier for me. I use for mostly my content making and editing of videos.",
    name: "Angelesse Adrerolle",
    image: "https://randomuser.me/api/portraits/thumb/women/45.jpg",
    alt: "Angelesse",
  },
  {
    message:
      "My experience writing exams has always been terrible. After getting the right artificial intelligence that would help me with the exams preparations , it was amazing. I totally recommend this platform to anyone that needs an A.I assistant",
    name: "Animashaun Williams",
    image: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
    alt: "Animashaun",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] rounded-[32px] mx-[3rem] p-[3rem] text-[#FFFFFF]">
      <div className="flex flex-col gap-[40px]">
        <div className="flex justify-center">
          <Typography fontWeight={700} fontSize={54}>
            Why Use Our Platform?
          </Typography>
        </div>

        <div className="flex gap-[20px] justify-center">
          {testimonials.map((testimony) => (
            <div className="rounded-[15px] flex flex-col gap-[40px] py-[40px] px-[20px] backdrop-blur-[25px] bg-[#F4F5FA26] border  border-transparent hover:border-[#2B91EE] hover:scale-105 transition-all duration-300 ease-in-out">
              <Typography fontWeight={500} fontSize={17}>
                {testimony.message}
              </Typography>

              <div className="flex items-center gap-[7px]">
                <Avatar src={testimony.image} />
                <Typography fontWeight={700} fontSize={14}>
                  {testimony.name}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
