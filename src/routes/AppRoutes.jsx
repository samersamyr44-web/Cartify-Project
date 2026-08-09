import { Routes, Route } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../pages/ProductDetails";
import Auth from "../pages/Auth";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Application */}

      <Route path="/" element={<AppLayout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Products */}
        <Route path="products" element={<Products />} />

        {/* Products by Category */}
        <Route path="products/category/:category" element={<Products />} />

        {/* Product Details */}
        <Route path="products/:id" element={<ProductDetails />} />

        {/* Categories */}
        <Route path="categories" element={<Categories />} />

        {/* Cart */}
        <Route path="cart" element={<Cart />} />

        {/* Wishlist */}
        <Route path="wishlist" element={<Wishlist />} />

        {/* Profile */}
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Authentication */}
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
};

export default AppRoutes;
