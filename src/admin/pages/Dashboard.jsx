import { Grid, Typography, Box } from "@mui/material";

import {
  CurrencyRupee,
  ShoppingCart,
  People,
  TrendingUp,
} from "@mui/icons-material";

import StatCard from "../components/StatCard";

function Dashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹1,25,000",
      icon: <CurrencyRupee />,
    },
    {
      title: "Total Orders",
      value: "128",
      icon: <ShoppingCart />,
    },
    {
      title: "Total Customers",
      value: "86",
      icon: <People />,
    },
    {
      title: "Total Profit",
      value: "₹32,000",
      icon: <TrendingUp />,
    },
  ];

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Welcome to OX STORE administration.
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
