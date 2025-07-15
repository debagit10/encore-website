import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSendMail = () => {
    const email = "encoreai2025@gmail.com";
    const subject = encodeURIComponent("Feedback or Comment");
    const body = encodeURIComponent(message);

    // Compose mailto URL
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open mail client
    window.open(mailtoLink, "_blank");
  };

  return (
    <section
      className="flex flex-col lg:flex-row gap-12 lg:gap-[10rem] px-4 md:px-10 py-10 items-start"
      id="contact"
    >
      {/* Text + Form Section */}
      <div className="flex flex-col gap-8 flex-1">
        {/* Heading + Subtext */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[36px] sm:text-[42px] md:text-[54px] font-bold bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
            Get in touch
          </h1>
          <Typography
            fontWeight={400}
            sx={{ fontSize: { xs: 16, sm: 18, md: 22 }, color: "#464646" }}
          >
            We are always available to assist you with your{" "}
            <br className="hidden sm:block" /> inquiries:
          </Typography>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <img src="/phone.png" alt="Phone" className="w-6 h-6" />
            <a href="tel:+2348053950341">
              <p className="text-[20px] sm:text-[24px] font-bold bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
                +234 70 3450 4663
              </p>
            </a>
          </div>

          <div className="flex gap-3 items-center">
            <img src="/mail.png" alt="Email" className="w-6 h-6" />
            <a href="mailto:encoreai2025@gmail.com" target="_blank">
              <p className="text-[20px] sm:text-[24px] font-bold bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
                encoreai2025@gmail.com
              </p>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4 w-full max-w-[460px]">
          <TextField
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type in your thoughts..."
            multiline
            rows={6}
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "#F2F2F3",
                borderRadius: "32px",
                padding: "16px",
              },
              "& fieldset": { border: "none" },
            }}
          />

          <Button
            onClick={handleSendMail}
            disableElevation
            variant="contained"
            sx={{
              height: "56px",
              borderRadius: "34313.73px",
              background: "radial-gradient(circle, #2B91EE, #0167C4)",
              textTransform: "capitalize",
            }}
            fullWidth
          >
            Send a mail
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block flex-1">
        <img
          src="/contact.png"
          alt="Customer support"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Contact;
