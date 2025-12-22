import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWishlist(product) {
    setWishlist((prev) => {
      if (prev.find((item) => item._id === product._id)) return prev;
      return [...prev, product];
    });
  }

  function removeFromWishlist(id) {
    setWishlist((prev) => prev.filter((item) => item._id !== id));
  }

  function isInWishlist(id) {
    return wishlist.some((item) => item._id === id);
  }

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
