import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  InputBase,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Badge from "@mui/material/Badge";

import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import oxLogo from "../assets/ox-logo.png";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

function Navbar({
  onProductsClick,
  cartCount,
  search,
  setSearch,
  onContactClick,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box sx={{ width: 240 }} onClick={() => setDrawerOpen(false)}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  px: 1,
                  py: 0,
                  mt: 0,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Menu
                </Typography>

                <CancelIcon
                  onClick={() => setDrawerOpen(false)}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                />
              </Box>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <InfoOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    secondary="About"
                    onClick={() => navigate("/about")}
                  />
                </ListItemButton>
                <ListItemButton onClick={() => navigate("/cart")}>
                  <ListItemIcon>
                    <Badge badgeContent={cartCount} color="primary">
                      <ShoppingCartOutlinedIcon />{" "}
                    </Badge>
                  </ListItemIcon>
                  <ListItemText secondary="Cart" />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    navigate("/user-profile");
                    setDrawerOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <PersonOutlineIcon />
                  </ListItemIcon>
                  <ListItemText secondary="Profile" />
                </ListItemButton>
              </List>
            </Box>
          </Drawer>
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Button>
            <Box
              component="img"
              src={oxLogo}
              alt="OX STORE logo"
              sx={{
                width: 40,
                height: 40,
                objectFit: "cover",
                display: { xs: "none", md: "inline-flex" },
              }}
              //        block	Starts on a new line
              // inline	Sits alongside other inline content
              // flex	Creates a flex container, normally block-level
              // inline-flex	Creates a flex container that behaves like inline contentinline content
            />
          </Button>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 0, md: 5 },
              flexDirection: "row",
              position: "absolute",
              left: { md: "45%", sm: "30%", xs: "36%" },
              transform: "translateX(-50%)",
            }}
          >
            <Button
              color="inherit"
              onClick={() => {
                navigate("/");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </Button>
            <Button onClick={onProductsClick} color="inherit">
              Products
            </Button>
            <Button
              color="inherit"
              sx={{
                display: "inline-flex",
              }}
              onClick={() => navigate("/about")}
            >
              About
            </Button>
            <Button
              color="inherit"
              onClick={onContactClick}
              sx={{
                display: { xs: "none", sm: "inline-flex", md: "inline-flex" },
              }}
            >
              Contact
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, md: 2 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "background.default",
                borderRadius: 2,
                px: 1,
                width: { xs: 195, sm: 230, md: 325 },
              }}
            >
              <SearchIcon fontSize="small" color="secondary" />
              <InputBase
                placeholder="Search  Products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ ml: 1, fontSize: 15, width: "100%" }}
              />
              {/* What is onChange? It is an event handler that executes whenever
              the input value changes. What is e? e represents the event object
              generated by the browser when the user types or changes the input.
              What is e.target? It refers to the HTML element that triggered the
              event — in this case, your input field. What is e.target.value? It
              gives you the current text inside that input field. */}
            </Box>

            <IconButton
              color="inherit"
              sx={{ display: { xs: "none", md: "inline-flex" } }}
              onClick={() => navigate("/cart")}
            >
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ display: { xs: "none", md: "inline-flex" } }}
              onClick={() => navigate("/user-profile")}
            >
              <PersonOutlineIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
