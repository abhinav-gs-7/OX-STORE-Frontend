import {
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
} from "@mui/material";
import { Snackbar, Alert } from "@mui/material";
import heroImage from "../assets/Group 2014.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Profile({ registeredUser, onLogin }) {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  function handleLogin(event) {
    event.preventDefault();

    if (!registeredUser) {
      setError("No account found. Please register first.");
      return;
    }

    if (
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      onLogin();
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  }
  <Snackbar
    open={Boolean(error)}
    autoHideDuration={3000}
    onClose={() => setError("")}
    anchorOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
  >
    <Alert severity="error" variant="filled">
      {error}
    </Alert>
  </Snackbar>
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "secondary",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 5, sm: 4 },
        py: 5,
      }}
    >
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={3000}
        onClose={() => setError("")}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity="error" variant="filled">
          {error}
        </Alert>
      </Snackbar>
      <Grid
        container
        spacing={{ xs: 4, md: 8, sm: 6 }}
        sx={{
          maxWidth: "1200px",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Grid size={{ xs: 12, md: 6, sm: 9 }}>
          <Stack spacing={1}>
            <Typography variant="h3" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
              Good finds.
              <br />
              Great to have you back.
            </Typography>

            <Box
              component="img"
              src={heroImage}
              alt="Featured products"
              sx={{
                width: "100%",
                height: { xs: 330, md: 300, sm: 300 },
                objectFit: "cover",
                borderRadius: 3,
              }}
            />

            <Typography variant="body2" color="primary.dark">
              Buy smarter. Sell easier. Make room for more.
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6, sm: 9 }}>
          <Paper
            elevation={20}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 6,
              maxWidth: 480,
              mx: "auto",
            }}
          >
            <Typography variant="h4" fontWeight="bold" sx={{ pb: 1 }}>
              Welcome back
            </Typography>

            <Stack spacing={2.5} component="form" onSubmit={handleLogin}>
              <TextField
                fullWidth
                required
                label="Email address"
                placeholder="you@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                fullWidth
                required
                label="Password"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
              >
                {/* ai  */}
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={rememberMe}
                      onChange={(event) => setRememberMe(event.target.checked)}
                    />
                    //                     When the user changes the checkbox, React receives an event.

                    // event.target.checked gives us a Boolean:
                    // - true if checked.
                    // - false if unchecked.
                    // Then setRememberMe() updates our state.
                  }
                  label="Remember me"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={showPassword}
                      onChange={(e) => setShowPassword(e.target.checked)}
                    />
                  }
                  label="Show password"
                />

                <Link
                  onClick={() => navigate("/forgot-password")}
                  underline="hover"
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: "bold",
                }}
              >
                Log in
              </Button>

              <Typography textAlign="center" variant="body2">
                New to OX STORE?{" "}
                <Link
                  onClick={() => navigate("/register")}
                  underline="hover"
                  sx={{ cursor: "pointer" }}
                >
                  Create an account
                </Link>
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
