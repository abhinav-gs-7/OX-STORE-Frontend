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
import Samsung from "./assets/image.png";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import UserProfile from "./pages/UserProfile";
import { Navigate } from "react-router-dom";
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
    {
      id: 4,
      name: "Samsum-M52-5G",
      price: 35000,
      category: "Mobiles",
      image: Samsung,
    },
  ];

  const [cart, setCart] = useState([]);
  const [userAddress, setUserAddress] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  //reduce() is a JavaScript array method.

// Its job is to take all elements of an array and combine them into one final value.
  const productsRef = useRef(null); //Hold a reference/value //

  //   This creates a JavaScript object:
  // {
  //   current: null
  // }

  // Now connect it to a React element:
  // <Box ref={productsRef}>
  //   Newly Added Products
  // </Box>

  // After React renders the component, the object becomes conceptually:
  // {
  //   current: HTMLDivElement
  // }

  // Now you can access the actual HTML element through
  const navigate = useNavigate();
  const scrollToContact = () => {
    if (location.pathname === "/") { //location is a browser-provided object pathname gives us the path portion of the current URL.
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  };
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  function saveRegistration(userData) {
    setRegisteredUser(userData);
    setUserAddress(userData.address);
  }
  function updateUserProfile(updatedUser) {
    setRegisteredUser(updatedUser);
    setUserAddress(updatedUser.address);
  }

  function addToCart(product) {
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

  return (
    <div>
      <Navbar
        onProductsClick={scrollToProducts}
        cartCount={cartCount}
        search={search}
        onContactClick={scrollToContact}
        setSearch={setSearch}
      />
      <Toolbar />
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
            // isLoggedIn && registeredUser ? (
              <Cart
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={deecreaseQuantity}
                removeFromCart={removeFromCart}
                total={total}
                recommendedProducts={Products}
                userAddress={userAddress}
              />
            // ) : (
            //   <Navigate to="/profile" replace />
            // )
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              registeredUser={registeredUser}
              onLogin={() => setIsLoggedIn(true)}
              onLogout={() => {
                setIsLoggedIn(false);
                setRegisteredUser(null);
                setUserAddress(null);
                navigate("/");
              }}
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
      </Routes>
    </div>
  );
}

export default App;
