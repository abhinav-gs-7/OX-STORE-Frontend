import { Box, Paper, Typography, Stack, Divider } from "@mui/material";

export default function UserProfile({ registeredUser, onUpdateProfile }) {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        My Profile
      </Typography>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Personal Information
        </Typography>

        <Stack spacing={2}>
          <Box>
            <Typography color="text.secondary">Full Name</Typography>
            <Typography>{registeredUser?.name}</Typography>
          </Box>

          <Divider />

          <Box>
            <Typography color="text.secondary">Email Address</Typography>
            <Typography>{registeredUser?.email}</Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" fontWeight="bold" mb={2}>
          Delivery Address
        </Typography>

        <Stack spacing={2}>
          {[
            ["House / Flat", registeredUser?.address?.house],
            ["Street", registeredUser?.address?.street],
            ["City", registeredUser?.address?.city],
            ["State", registeredUser?.address?.state],
            ["PIN Code", registeredUser?.address?.pinCode],
          ].map(([label, value]) => (
            <Box key={label}>
              <Typography color="text.secondary">{label}</Typography>
              <Typography>{value || "Not provided"}</Typography>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}
