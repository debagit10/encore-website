import { Button, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <section className="flex gap-[10rem]">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[54px] font-bold bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
            Get in touch
          </h1>
          <Typography fontWeight={400} fontSize={22} color="#464646">
            We are always available to assist you with your <br /> inquiries:
          </Typography>
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[12px] items-center">
            <img src="/phone.png" />
            <a href="tel:+2347034504663">
              <p className="text-[24px] font-bold bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
                +234 70 3450 4663
              </p>
            </a>
          </div>

          <div className="flex gap-[12px] items-center">
            <img src="/mail.png" />
            <a href="mailto:info@encoredirectories.org">
              <p className="text-[24px] font-bold bg-[radial-gradient(circle_at_center,_#2B91EE,_#0167C4)] bg-clip-text text-transparent">
                info@encoredirectories.org
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <TextField
            placeholder="Type in your thoughts......"
            multiline
            rows={6}
            variant="outlined"
            sx={{
              width: "460px",
              height: "187px",
              "& .MuiInputBase-root": {
                height: "100%",
                backgroundColor: "#F2F2F3",
                borderRadius: "32px",
                border: "none",
                padding: "16px",
              },
              "& fieldset": {
                border: "none",
              },
            }}
          />

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
            Send a mail
          </Button>
        </div>
      </div>

      <div className="hidden lg:block">
        <img src="/contact.png" alt="Customer support" />
      </div>
    </section>
  );
};

export default Contact;
