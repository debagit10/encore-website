import { Dialog, DialogContent, Typography } from "@mui/material";

interface SplashProps {
  open: boolean;
}

const SplashScreen: React.FC<SplashProps> = ({ open }) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <div className="rounded-[12px] flex flex-col gap-[2rem] py-[2rem]">
          <div className="flex justify-center gap-[9px]">
            <img src="/logo.png" alt="Encore AI logo" />
            <Typography
              fontWeight={900}
              fontSize={24}
              sx={{
                background:
                  "radial-gradient(circle at center, #2B91EE, #0167C4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Encore
            </Typography>
          </div>

          <div className="flex justify-center text-center">
            <Typography
              fontWeight={700}
              fontSize={48}
              sx={{
                background:
                  "radial-gradient(circle at center, #2B91EE, #0167C4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Thank You For Your Feedback
            </Typography>
          </div>

          <div className="flex justify-center">
            <img src="/tick.png" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SplashScreen;
