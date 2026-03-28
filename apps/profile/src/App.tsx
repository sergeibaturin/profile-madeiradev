import { AppThemeProvider, Button } from "@repo/core";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
          gap: 3,
        }}
      >
        <Typography variant="h3" component="h1">
          Profile
        </Typography>
        <Button>Get Started</Button>
      </Box>
    </AppThemeProvider>
  );
}
