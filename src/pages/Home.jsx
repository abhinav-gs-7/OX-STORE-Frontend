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
  onProductsClick,
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
            padding: 5,
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
              backgroundColor: "secondary.main",
              color: "secondary.Text",
              borderRadius: "8px",
              width: "90px",
              height: "35px",
              fontSize: "10px",

              "&:hover": {
                backgroundColor: "primary.Text",
                color: "primary.main",
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
            <Grid key={category.name} size={4}>
              <Box
                onClick={() => {
                  setSelectedCategory(category.name);
                  productsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "0.3s",

                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "primary.Text",
                    transform: "translateX(-10px)",
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 1,
                    color: "primary.main",
                    transition: "0.3s",
                    "&:hover": { color: "secondary.main" },
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

      <Box ref={productsRef} sx={{ padding: 4, scrollMarginTop: "40px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Products
        </Typography>

        {products.length > 0 ? (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", py: 5 }}>
            <Typography variant="h6">No products found!</Typography>
            <Typography>
              Try another search or select a different category.
            </Typography>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              onClick={() => setSelectedCategory("All")}
            >
              View all products
            </Button>
          </Box>
        )}
      </Box>

      {/* Footer */}
      <Box
        id="contact"
        component="footer"
        sx={{
          backgroundColor: "secondary.main",
          color: "secondary.Text",
          mt: 4,
          px: 5,
          py: 4,
        }}
      >
        <Grid container spacing={5}>
          {/* Store branding */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight="bold">
              OX STORE
            </Typography>

            <Typography variant="body1" sx={{ mt: 4, color: "primary.Text" }}>
              Buy products easily with OX STORE.
            </Typography>
          </Grid>

          {/* Quick links */}
          <Grid  size={{ xs: 12, md: 4 }}>
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

            <Typography variant="body2" sx={{ mt: 2 }}>
              Email: oxstoresupport@oxstore.com
            </Typography>

            <Typography variant="body2" sx={{ mt: 1 }}>
              Location: Coimbatore, Tamil Nadu
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © 2026 OX STORE. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
