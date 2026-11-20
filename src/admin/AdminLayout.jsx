import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";

function AdminLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#FFF2E5",
      }}
    >
      <AdminSidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default AdminLayout;
