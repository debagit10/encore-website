import { Dialog, DialogContent, Typography } from "@mui/material";

interface SplashProps {
  open: boolean;
}

const SplashScreen: React.FC<SplashProps> = ({ open }) => {
  return (
    <Dialog open={open} fullWidth maxWidth="sm">
      <DialogContent
        sx={{
          padding: {
            xs: "1.5rem",
            sm: "2rem",
          },
        }}
      >
        <div className="rounded-[12px] flex flex-col gap-6 sm:gap-10 py-6 sm:py-8">
          {/* Logo Section */}
          <div className="flex justify-center items-center gap-2 sm:gap-4">
            <img
              src="/logo.png"
              alt="Encore AI logo"
              className="w-10 sm:w-12 h-auto"
            />
            <Typography
              fontWeight={900}
              fontSize={{ xs: 20, sm: 24 }}
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

          {/* Thank You Text */}
          <div className="flex justify-center text-center px-2">
            <Typography
              fontWeight={700}
              fontSize={{ xs: 28, sm: 36, md: 48 }}
              sx={{
                background:
                  "radial-gradient(circle at center, #2B91EE, #0167C4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2,
              }}
            >
              Thank You For Your Feedback
            </Typography>
          </div>

          {/* Tick Icon */}
          <div className="flex justify-center">
            <img
              src="/tick.png"
              alt="Success Tick"
              className="w-16 sm:w-20 md:w-24 h-auto"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SplashScreen;
