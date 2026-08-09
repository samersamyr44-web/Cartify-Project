// src/context/WishlistContext.jsx

import { createContext, useContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });


  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);


  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {

      const exists = prev.find(
        (item) => item.id === product.id
      );


      if (exists) {
        return prev.filter(
          (item) => item.id !== product.id
        );
      }


      return [
        ...prev,
        product
      ];
    });
  };


  const removeFromWishlist = (id) => {
    setWishlistItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };


  const isInWishlist = (id) => {
    return wishlistItems.some(
      (item) => item.id === id
    );
  };


  const clearWishlist = () => {
    setWishlistItems([]);
  };


  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};


export const useWishlist = () => {
  return useContext(WishlistContext);
};