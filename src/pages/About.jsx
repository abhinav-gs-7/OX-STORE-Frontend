import { Box, Paper, Typography, Stack, Button } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        margin: "15px",
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h3" fontWeight="bold" textAlign="center">
          About OX STORE
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Welcome to OX STORE! We aim to make online shopping simple,
          convenient, and enjoyable. Explore products across different
          categories, discover items you love, and add your favourites to your
          shopping cart.
        </Typography>


        <Typography variant="h5" fontWeight="bold">
          What we offer
        </Typography>

        <Typography color="text.secondary">
          • Easy product browsing
          {"\n"}• Multiple product categories
          {"\n"}• Simple shopping cart management
          {"\n"}• A convenient shopping experience
        </Typography>

        <Button onClick={()=>navigate("/")} variant="contained" size="small">
          Explore Products
        </Button>
      </Stack>
    </Box>
  );
}
