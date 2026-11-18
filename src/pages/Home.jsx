import ProductCard from "../components/ProductCard";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Grid from "@mui/material/Grid";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LaptopIcon from "@mui/icons-material/Laptop";
import ChairIcon from "@mui/icons-material/Chair";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import KitchenIcon from "@mui/icons-material/Kitchen";
import heroImage from "../assets/homeimage.jpg";
import Toolbar from "@mui/material/Toolbar";
function Home({
  products,
  onAddToCart,
  search,
  setSearch,
  setSelectedCategory,
  cart,
  increaseQuantity,
  decreaseQuantity,
  productsRef,
  onProductsClick
}) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          minHeight: "709px",
          minWidth: "1440",
          alignItems: "flex-start",
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundColor: "orange",
          paddingTop: 1,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          justifyContent: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
            padding: 2,
          }}
        >
          <Typography variant="h2">Sell What You Don't Need</Typography>
          <Typography variant="body1">
            Give your unused items a new home.
          </Typography>
          <Button
            variant="contained"
            onClick={onProductsClick}
            endIcon={<ShoppingBagIcon />}
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
              width: "90px",
              height: "35px",
              fontSize: "10px",

              "&:hover": {
                backgroundColor: "white",
                color: "orange",
              },
            }}
          >
            Shop
          </Button>{" "}
        </Box>
      </Box>
      <Box
        sx={{
          padding: 1,
          margin: "10px",

          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Shop by Category
        </Typography>
        <Grid container spacing={5}>
          {[
            { name: "Mobiles", icon: <PhoneAndroidIcon /> },
            { name: "Laptops", icon: <LaptopIcon /> },
            { name: "Gadgets", icon: <ChairIcon /> },
            { name: "Books", icon: <MenuBookIcon /> },
            { name: "Fashion", icon: <CheckroomIcon /> },
            { name: "Appliances", icon: <KitchenIcon /> },
          ].map((category) => (
            <Grid key={category.name} size={{ xs: 4, sm: 4, md: 4 }}>
              <Box
                sx={{
                  backgroundColor: "secondary",
                  padding: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "0.3s",

                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "primary.Text",
                    transform: "translateX(-15px)",
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 1,
                    color: "orange",
                    transition: "0.3s",
                    "&:hover": { color: "black" },
                  }}
                >
                  {category.icon}
                </Box>

                <Typography variant="h6">{category.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box ref={productsRef} sx={{ padding: 4, scrollMarginTop: "90px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Newly added
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid
              key={product.id}
              size={{ xs: 12, sm: 6, md: 3, gap: { xs: "90px" } }}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Sell your stuff CTA */}
      <Box
        size
        sx={{
          backgroundColor: "primary.main",
          color: "secondary.main",
          display: "flex",
          borderRadius: 3,
          mx: 4,
          my: 5,
          p: 5,
          textAlign: "center",
          transform: "translateY(-15px)",
          display: "flex",
          alignItems: "flex-start",

          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Got stuff you don't use?
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Ready to sell your Unused Item ?
        </Typography>
        <Box sx={{ display: "flex", alignItems: "end", justifyContent: "end" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "primay.main",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            Post Your Ad
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#222222",
          color: "white",
          mt: 4,
          px: 5,
          py: 4,
        }}
      >
        <Grid container spacing={4}>
          {/* Store branding */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#FF6B00" }}
            >
              OX STORE
            </Typography>

            <Typography variant="body2" sx={{ mt: 4, color: "#cccccc" }}>
              Give your unused items a new home. Buy and sell pre-owned products
              easily with OX STORE.
            </Typography>
          </Grid>

          {/* Quick links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}
            >
              <Typography>Home</Typography>
              <Typography>Products</Typography>
              <Typography>About Us</Typography>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold">
              Contact Us
            </Typography>

            <Typography variant="body2" sx={{ mt: 2, color: "#cccccc" }}>
              Email: oxstoresupport@oxstore.com
            </Typography>

            <Typography variant="body2" sx={{ mt: 1, color: "#cccccc" }}>
              Location: Coimbatore, Tamil Nadu
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid #555555",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="#aaaaaa">
            © 2026 OX STORE. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
