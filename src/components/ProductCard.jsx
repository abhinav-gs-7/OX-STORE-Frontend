import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function ProductCard({ product, onAddToCart }) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "white",
        boxShadow: 2,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-15px)",
          boxShadow: 2,
        },
      }}
    >
      {/* Product image area */}
      <Box
        sx={{
          height: 180,
          backgroundColor: "#FFF2E5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: "100%",
            height: "180px",
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>

      {/* Product details */}
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>

        <Typography variant="h6" color="primary">
          ₹{product.price}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, backgroundColor: "#FF6B00" }}
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}

export default ProductCard;


// function ProductCard({product,onAddToCart,cart }) {
//   return (
//     <>
//       <h5>{product.name}</h5>
//       <p>
//         {product.price}
//       </p>
      
//       <button onClick={() => onAddToCart(product)}>Add to Cart</button>

//     </>
//   );
// }

// export default ProductCard;