import { FiHeart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const EmptyWishlist = () => {
  return (
    <div
      className="
      min-h-[60vh]
      flex
      flex-col
      items-center
      justify-center
      text-center
      "
    >
      <FiHeart
        size={70}
        className="
        opacity-50
  
        "
      />

      <h2 className="text-2xl font-bold mt-5">
        Your wishlist is empty
      </h2>

      <p className="mt-2 opacity-70 max-w-sm">
        Save your favorite products to your wishlist so
        you can easily find them later.
      </p>

      <NavLink
        to="/products"
        className="
        mt-5
        px-5
        py-2
        rounded-lg
        bg-[var(--color-button)]
        text-[var(--color-button-text)]
        hover:bg-[var(--color-button-hover)]
        transition
        "
      >
        Explore Products
      </NavLink>
    </div>
  );
};

export default EmptyWishlist;