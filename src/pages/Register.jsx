import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
} from "@mui/material";

import { Snackbar, Alert } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Register({ onRegister }) {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [address, setAddress] = useState({
    house: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
  });
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleRegister(event) {
    event.preventDefault();
     if (account.password !== account.confirmPassword) {
     setError(true);
   
       return;
     }
    
    onRegister( {name: account.name,
  email: account.email,
  password: account.password,
  address: address,});
    setSuccess(true);

    setTimeout(() => {
      navigate("/profile");
    }, 1500);
    console.log("Registration submitted");

    navigate("/profile");
  }
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 5,
      }}
    >
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity="error" variant="filled">
          Passwords do not match!
        </Alert>
      </Snackbar>
      ;
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 480,
          p: { xs: 3, md: 4 },
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={1}>
          Create your account
        </Typography>

        <Stack spacing={2} component="form" onSubmit={handleRegister}>
          <TextField
            required
            fullWidth
            label="Full name"
            placeholder="Enter your name"
            value={account.name}
            onChange={(e) => setAccount({ ...account, name: e.target.value })}
          />

          <TextField
            required
            fullWidth
            label="Email address"
            placeholder="you@example.com"
            type="email"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />

          <TextField
            required
            fullWidth
            label="Password"
            placeholder="Create a password"
            type="password"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />

          <TextField
            required
            fullWidth
            label="Confirm password"
            placeholder="Re-enter your password"
            type="password"
            value={account.confirmPassword}
            onChange={(e) =>
              setAccount({ ...account, confirmPassword: e.target.value })
            }
          />
          <TextField
            fullWidth
            label="House / Flat / Building"
            value={address.house}
            onChange={(e) => setAddress({ ...address, house: e.target.value })}
          />

          <TextField
            required
            fullWidth
            label="Street / Area"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            placeholder="Enter street or area"
          />

          <TextField
            fullWidth
            label="City"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            placeholder="Enter your city"
            required
          />

          <TextField
            fullWidth
            label="State"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
            placeholder="Enter your state"
            required
          />

          <TextField
            required
            fullWidth
            label="PIN Code"
            value={address.pinCode}
            onChange={(e) =>
              setAddress({ ...address, pinCode: e.target.value })
            }
            placeholder="Enter 6-digit PIN code"
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
            type="submit"
          >
            Create account
          </Button>

          <Typography textAlign="center" variant="body2">
            Already have an account?{" "}
            <Link
              onClick={() => navigate("/profile")}
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Log in
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
