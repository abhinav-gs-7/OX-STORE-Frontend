import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import iphoneImage from "./assets/iphone.jpg";
import shoesImage from "./assets/shoes.jpg";
import laptopImage from "./assets/laptop.jpg";
import oxLogo from "./assets/ox-logo.png";
function App() {
  const Products = [
    {
      id: 1,
      name: "iphone",
      price: 70000,
      category: "Mobiles",
      image: iphoneImage,
    },
    {
      id: 2,
      name: "Lotto-EnergyX",
      price: 1500,
      category: "Fashion",
      image: shoesImage,
    },
    {
      id: 3,
      name: "Hp_Ryzen-5",
      price: 35000,
      category: "Laptops",
      image: laptopImage,
    },
  ];

  const [cart, setCart] = useState([]);
  console.log("Current cart:", cart);
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function addToCart(product) {
    console.log("addToCart received:", product);

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart((previousCart) =>
        previousCart
          .map((item) => {
            if (item.id === product.id && item.quantity < 10) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          })
          .filter((item) => item.quantity > 0),
      );
    } else {
      setCart((previousCart) => [...previousCart, { ...product, quantity: 1 }]);
    }
  }

  function deecreaseQuantity(productId) {
    setCart((previousCart) => {
      return previousCart
        .map((item) => {
          if (item.id === productId)
            return { ...item, quantity: item.quantity - 1 };
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  }
  function increaseQuantity(productId) {
    setCart((previousCart) => {
      return previousCart.map((item) => {
        if (item.id === productId && item.quantity < 10)
          return { ...item, quantity: item.quantity + 1 };
        return item;
      });
    });
  }
  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts = Products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchescategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchescategory;
  });

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#222222" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            gap: 1,
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={oxLogo}
              alt="OX Store Logo"
              sx={{
                width: 42,
                height: 42,
                objectFit: "contain",
              }}
            />

            <Typography variant="h5" fontWeight="bold"
            sx={{  color: "#FF6B00"}}>
           
              OX STORE
            </Typography>
          </Box>

          {/* Desktop navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Button color="inherit">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">About</Button>
          </Box>

          {/* Right section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, sm: 1 },
            }}
          >
            {/* Search */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 2,
                px: 1,
                width: { xs: "36px", sm: "150px", md: "190px" },
                height: "36px",
              }}
            >
              <SearchIcon sx={{ color: "gray" }} />

              <InputBase
                placeholder="Search..."
                sx={{
                  ml: 1,
                  width: "100%",
                  display: { xs: "none", sm: "block" },
                }}
              />
            </Box>

            {/* Cart */}
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>

            {/* Profile */}
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>

            {/* Mobile menu */}
            <IconButton
              color="inherit"
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={filteredProducts}
              onAddToCart={addToCart}
              search={search}
              setSearch={setSearch}
              setSelectedCategory={setSelectedCategory}
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={deecreaseQuantity}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={deecreaseQuantity}
              total={total}
            />
          }
        />
      </Routes>
    </div>
  );
}

function Welcome(props) {
  return <h1>{props.n}</h1>;
}

// function ProductCard({ id, name, price, category, onAddtoCart, product }) {
//   return (
//     <>
//       <h5>{id}</h5>
//       <h3>
//         {name} {category}
//       </h3>
//       <p>{price}</p>
//       <button onClick={() => onAddtoCart(product)}>Add to Cart</button>
//     </>
//   );
// }

export default App;

{
  /* <Welcome n="OX" />
      <h1>I sell what I don't need</h1>
      <input
        type="text"
        placeholder="Seacrh products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSelectedCategory("All")}>All</button>
      <button onClick={() => setSelectedCategory("Electronics")}>
        Electronics
      </button>
      <button onClick={() => setSelectedCategory("Fashion")}>fashion</button>;
      {/* <ProductCard name="iphone" price={50000} category="Mobiles" /> */
}
//   {filteredProducts.map((product) => {
//     return (
//       <ProductCard
//         key={product.id}
//         id={product.id}
//         name={product.name}
//         price={product.price}
//         product={product}
//         category={product.category}
//         onAddtoCart={addToCart}
//       />
//     );
//   })}
//   <h2>Cart Count:{cart.length}</h2>
//   <h2>Cart Products:</h2>
//   {cart.map((item) => (
//     <div>
//       <p>
//         {item.name}-${item.price} *{item.quantity}
//       </p>
//       <button onClick={() => deecreaseQuantity(item.id)}>- </button>
//       <button onClick={() => increaseQuantity(item.id)}>+</button>
//     </div>
//   ))}
//   <h3>TOtal price:${total}</h3>
//   <button onClick={() => setcount(count + 1)}>Add</button>
// </div> */}
