import { AppThemeProvider, Button } from "@repo/core";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export function App() {
  return (
    <AppThemeProvider>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          background: "linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h1"
            sx={{ color: "white", fontWeight: 700, textAlign: "center" }}
          >
            Welcome
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Typography
            variant="h5"
            sx={{ color: "rgba(255,255,255,0.85)", textAlign: "center" }}
          >
            Build something extraordinary.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.4, type: "spring" }}
        >
          <Button
            size="large"
            sx={{ color: "primary.main", bgcolor: "white", "&:hover": { bgcolor: "grey.100" } }}
          >
            Get Started
          </Button>
        </motion.div>
      </Box>
    </AppThemeProvider>
  );
}
