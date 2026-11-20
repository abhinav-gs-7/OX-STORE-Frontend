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
import Navbar from "./Navbar/Navbar";
import { useRef } from "react";
import About from "./pages/About";
import Box from "@mui/material/Box";
import iphoneImage from "./assets/iphone.jpg";
import shoesImage from "./assets/shoes.jpg";
import laptopImage from "./assets/laptop.jpg";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import UserProfile from "./pages/UserProfile";
import { Navigate } from "react-router-dom";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Orders from "./admin/pages/Orders";
import Products from "./admin/pages/Products";
import Customers from "./admin/pages/Customers";
import Reports from "./admin/pages/Reports";
import { useLocation } from "react-router-dom";
function App() {
  const productsData = [
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
    {
      id: 4,
      name: "Samsum-M52-5G",
      price: 35000,
      category: "Mobiles",
      image: laptopImage,
    },
  ];
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  const [cart, setCart] = useState([]);
  const [userAddress, setUserAddress] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(null);
const [isLoggedIn, setIsLoggedIn] = useState(false);
  function saveRegistration(userData) {
    console.log("Received registration:", userData);
    setRegisteredUser(userData);
    setUserAddress(userData.address);
  }
  function updateUserProfile(updatedUser) {
    setRegisteredUser(updatedUser);
    setUserAddress(updatedUser.address);
  }
  console.log("Current cart:", cart);
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const productsRef = useRef(null);
  const navigate = useNavigate();

  // const scrollToProducts = () => {
  //   productsRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };
  const scrollToProducts = () => {
    if (window.location.pathname === "/") {
      productsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/");
      //setTimeout() is a JavaScript function that delays executing some code
      setTimeout(() => {
        productsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };
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
  function removeFromCart(productId) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== productId),
    );
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
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchescategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchescategory;
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      {!isAdminRoute && (
        <>
          <Navbar onProductsClick={scrollToProducts} cartCount={cartCount} />
          <Toolbar />
        </>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={filteredProducts}
              productsRef={productsRef}
              onAddToCart={addToCart}
              search={search}
              setSearch={setSearch}
              setSelectedCategory={setSelectedCategory}
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={deecreaseQuantity}
              onProductsClick={scrollToProducts}
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
              removeFromCart={removeFromCart}
              total={total}
              recommendedProducts={productsData}
              userAddress={userAddress}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              registeredUser={registeredUser}
              onLogin={() => setIsLoggedIn(true)}
            />
          }
        />
        <Route
          path="/register"
          element={<Register onRegister={saveRegistration} />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/user-profile"
          element={
            isLoggedIn && registeredUser ? (
              <UserProfile
                registeredUser={registeredUser}
                onUpdateProfile={updateUserProfile}
              />
            ) : (
              <Navigate to="/profile" replace />
            )
          }
        />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reports" element={<Reports />} />
        </Route>
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
