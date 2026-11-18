import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "calc(100vh - 60px)",
        backgroundColor: "#fff4e9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 5,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 450,
          p: { xs: 3, md: 4 },
          borderRadius: 3,
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h4" fontWeight="bold">
            Forgot password?
          </Typography>

          <Typography color="text.secondary">
            Enter your registered email address. We'll send you instructions to
            reset your password.
          </Typography>

          <TextField
            fullWidth
            label="Email address"
            placeholder="you@example.com"
            type="email"
          />

          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              py: 1.5,
              borderRadius: 2,
              fontWeight: "bold",
            }}
          >
            Send reset link
          </Button>

          <Typography textAlign="center" variant="body2">
            Remember your password?{" "}
            <Link component={RouterLink} to="/profile" underline="hover">
              Back to login
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
