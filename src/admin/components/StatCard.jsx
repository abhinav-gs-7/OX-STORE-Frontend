import { Card, CardContent, Typography, Box } from "@mui/material";

function StatCard({ title, value, icon, color }) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography color="text.secondary" variant="body2">
              {title}
            </Typography>

            <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: color,
              color: "white",
              p: 1.5,
              borderRadius: 2,
              display: "flex",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StatCard;
