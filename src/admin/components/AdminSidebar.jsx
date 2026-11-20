import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import {
  Dashboard as DashboardIcon,
  ShoppingBag as OrdersIcon,
  Inventory2 as ProductsIcon,
  People as CustomersIcon,
  Assessment as ReportsIcon,
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { title: "Orders", path: "/admin/orders", icon: <OrdersIcon /> },
  { title: "Products", path: "/admin/products", icon: <ProductsIcon /> },
  { title: "Customers", path: "/admin/customers", icon: <CustomersIcon /> },
  { title: "Reports", path: "/admin/reports", icon: <ReportsIcon /> },
];

function AdminSidebar() {
  const drawerWidth = 250;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#222222",
          color: "#FFFFFF",
          border: "none",
        },
      }}
    >
      <Toolbar sx={{ px: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          <Box component="span" sx={{ color: "#FF6B00" }}>
            OX
          </Box>{" "}
          STORE
        </Typography>
      </Toolbar>

      <Box sx={{ px: 3, py: 2 }}>
        <Typography
          variant="caption"
          sx={{ color: "#999999", letterSpacing: 1.5 }}
        >
          STORE MANAGEMENT
        </Typography>
      </Box>

      <List sx={{ px: 1.5 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.title}
            component={NavLink}
            to={item.path}
            end={item.path === "/admin"}
            sx={{
              borderRadius: 2,
              mb: 1,
              py: 1.4,
              color: "#BBBBBB",
              transition: "0.2s",

              "&.active": {
                backgroundColor: "#FF6B00",
                color: "#FFFFFF",
              },

              "&:hover": {
                backgroundColor: "#383838",
                color: "#FFFFFF",
              },

              "&.active:hover": {
                backgroundColor: "#E65F00",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "inherit",
                minWidth: 42,
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: 14,
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default AdminSidebar;
