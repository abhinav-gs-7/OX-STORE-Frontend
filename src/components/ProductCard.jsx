import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function ProductCard({ product, onAddToCart }) {
  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden", //Without overflow: "hidden", an image or child element might extend beyond the card's rounded corners.
        backgroundColor: "secondary.Text",
        boxShadow: 2,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-15px)",
        },
      }}
    >
      {/* Product image area */}
      <Box
        sx={{
          height: 180,
          backgroundColor: "secondary.Text",
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
            width: "90%",
            height: "140px",
            borderRadius: 2,
            objectFit: "scale-down",
            //By default, an <img> tag is an inline element (display: inline), meaning it behaves like a word in a sentence. Setting display: "block" changes that behavior
          }}
        />
      </Box>

      {/* Product details */}
      <Box sx={{ p: 2 } } >
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>

        <Typography variant="h6" color="primary.main">
          ₹{product.price}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, backgroundColor: "primary.main" }}
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