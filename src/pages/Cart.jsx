import { useState } from "react";

import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  Paper, //Creates a surface with a background and elevation
  Stack, //Arranges elements in rows or columns with spacing
  Divider, //Creates a separating line
  IconButton, //Creates a button containing an icon
  TextField,
  ToggleButton, //	One selectable option
  ToggleButtonGroup, //Groups related toggle buttons
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

import RemoveIcon from "@mui/icons-material/Remove";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  total,
  recommendedProducts,
  userAddress
}) {
  const [delivery, setDelivery] = useState("pickup");
  const [promoCode, setPromoCode] = useState("");

  const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`; //toLocaleString("en-IN")	Formats the number using Indian number grouping
  const navigate = useNavigate();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Box>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 1, py: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Your cart
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {cartCount} {cartCount === 1 ? "item" : "items"} in your cart.
        </Typography>

        {cart.length === 0 ? (
          <Paper sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              Your cart is empty
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Add some products.
            </Typography>
            <Button
              onClick={() => navigate("/")}
              variant="contained"
              sx={{ mt: 2 }}
            >
              Continue shopping
            </Button>
          </Paper>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                md: "2fr 1fr", //means the first column gets twice the available space of the second column.
              },
              gap: 4,
            }}
          >
            <Paper sx={{ p: 2, borderRadius: 3 }}>
              <Stack spacing={3}>
                {cart.map((item) => (
                  <Card
                    key={item.id}
                    elevation={1}
                    sx={{
                      backgroundColor: "background.default",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 1.5,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        width: 90,
                        height: 90,
                        objectFit: "contain",
                        borderRadius: 2,
                      }}
                    />
                    {/* //flex: 1 tells this element to take up the remaining
                    available space in the flex container */}
                    <Box sx={{ flex: 1, minWidth: 100 }}>
                      <Stack spacing={1}
                      >
                        <Typography fontWeight="bold">{item.name}</Typography>

                        <Typography variant="body2" color="text.secondary">
                          {item.category}
                        </Typography>

                        <Typography fontWeight="bold" sx={{ mt: 1 }}>
                          {formatPrice(item.price)}
                        </Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ textAlign: "left", justifyContent: "flex-end" }}>
                      <Typography fontWeight="bold">
                        {formatPrice(item.price * item.quantity)}
                      </Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mt: 1 }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => decreaseQuantity(item.id)}
                          sx={{ border: 1, borderColor: "primary.main" }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>

                        <Typography>{item.quantity}</Typography>

                        <IconButton
                          size="small"
                          onClick={() => increaseQuantity(item.id)}
                          disabled={item.quantity >= 10}
                          sx={{ border: 1, borderColor: "primary.main" }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                      <Button
                        color="warning"
                        size="small"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </Box>
                  </Card>
                ))}
              </Stack>

              <Button href="/" sx={{ mt: 2 }}>
                ← Continue shopping
              </Button>
            </Paper>

            {/* Order summary */}
            <Paper
              sx={{
                p: 2.5,
                borderRadius: 3,
                height: "fit-content",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Order summary
              </Typography>

              <Typography>{userAddress.house}</Typography>

              <Typography>{userAddress.street}</Typography>

              <Typography>
                {userAddress.city}, {userAddress.state}
              </Typography>

              <Typography>PIN Code: {userAddress.pinCode}</Typography>

              <Divider sx={{ my: 2 }} />

              <Stack direction="row" spacing={2}>
                <Typography variant="h6" fontWeight="bold">
                  Total
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="warning.main">
                  {formatPrice(total)}
                </Typography>
              </Stack>

            

              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 2, py: 1.5 }}
                disabled={cart.length === 0}
              >
                Proceed to checkout
              </Button>
            </Paper>
            {/* Recommendations */}
            {recommendedProducts?.length > 0 && (
              <Box sx={{ py: 2 }}>
                <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                    You may also like
                  </Typography>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(3, 1fr)",
                        md: "repeat(4, 1fr)",
                      },
                      gap: 2,
                    }}
                  >
                    {recommendedProducts
                      .filter(
                        (product) =>
                          !cart.some((item) => item.id === product.id),
                      )
                      .map((product) => (
                        <Card
                          key={product.id}
                          elevation={0}
                          sx={{ border: "1px solid ", borderRadius: 2 }}
                        >
                          <CardMedia
                            component="img"
                            image={product.image}
                            alt={product.name}
                            sx={{
                              height: 150,
                              objectFit: "contain",
                              p: 1,
                            }}
                          />
                          <Box sx={{ p: 1.5 }}>
                            <Typography fontWeight="bold">
                              {formatPrice(product.price)}
                            </Typography>
                            <Typography variant="body2">
                              {product.name}
                            </Typography>
                          </Box>
                        </Card>
                      ))}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Cart;
