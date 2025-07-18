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
    <div className="bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] rounded-[32px] mx-4 md:mx-[3rem] px-4 py-8 md:p-[3rem] text-white">
      <div className="flex flex-col gap-10">
        {/* Heading */}
        <div className="flex justify-center text-center">
          <Typography
            fontWeight={700}
            sx={{ fontSize: { xs: 28, sm: 36, md: 44, lg: 54 } }}
          >
            Why Use Our Platform?
          </Typography>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-[20px] justify-center items-center">
          {testimonials.map((testimony, index) => (
            <div
              key={index}
              className="rounded-[15px] flex flex-col gap-6 py-6 px-4 md:py-[40px] md:px-[20px] backdrop-blur-[25px] bg-[#F4F5FA26] border border-transparent hover:border-[#2B91EE] hover:scale-105 transition-all duration-300 ease-in-out max-w-sm w-full"
            >
              <Typography
                fontWeight={500}
                sx={{ fontSize: { xs: 15, sm: 16, md: 17 } }}
              >
                {testimony.message}
              </Typography>

              <div className="flex items-center gap-3">
                <Avatar src={testimony.image} alt={testimony.alt} />
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
