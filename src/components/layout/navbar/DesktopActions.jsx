import { NavLink, useLocation, useNavigate } from "react-router-dom";

import {
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiSun,
  FiMoon,
  FiLogIn,
} from "react-icons/fi";

import useTheme from "../../../hooks/useTheme";
import useCart from "../../../hooks/useCart";
import useWishlist from "../../../hooks/useWishlist";
import useAuth from "../../../hooks/useAuth";

const DesktopActions = () => {
  const { theme, toggleTheme } = useTheme();
  const { totalQuantity } = useCart();
  const { wishlistItems } = useWishlist();
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    if (location.pathname === "/profile") {
      navigate(-1);
    } else {
      navigate("/profile");
    }
  };

  return (
    <div
      className="
        hidden
        lg:flex
        items-center
        gap-5
      "
    >
      {/* Theme */}

      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="
          hover:text-[var(--color-primary)]
          transition
        "
      >
        {theme === "light" ? <FiMoon size={22} /> : <FiSun size={22} />}
      </button>

      {/* Wishlist */}

      <NavLink
        to="/wishlist"
        className="
          relative
          hover:text-[var(--color-primary)]
          transition
        "
      >
        <FiHeart size={22} />

        {wishlistItems.length > 0 && (
          <span
            className="
              absolute
              -top-3
              -right-3
              bg-red-500
              text-white
              text-xs
              rounded-full
              w-5
              h-5
              flex
              items-center
              justify-center
            "
          >
            {wishlistItems.length}
          </span>
        )}
      </NavLink>

      {/* Cart */}

      <NavLink
        to="/cart"
        className="
          relative
          hover:text-[var(--color-primary)]
          transition
        "
      >
        <FiShoppingCart size={22} />

        <span
          className="
            absolute
            -top-3
            -right-3
            bg-[var(--color-primary)]
            text-[var(--color-primary-text)]
            text-xs
            rounded-full
            w-5
            h-5
            flex
            items-center
            justify-center
          "
        >
          {totalQuantity}
        </span>
      </NavLink>

      {/* Profile / Login */}

      {isAuthenticated ? (
        <button
          type="button"
          onClick={handleProfileClick}
          aria-label="Profile"
          className="
            hover:text-[var(--color-primary)]
            transition
          "
        >
          <FiUser size={22} />
        </button>
      ) : (
        <NavLink
          to="/login"
          className="
            flex
            items-center
            gap-2
            hover:text-[var(--color-primary)]
            transition
          "
        >
          <FiLogIn size={22} />

          <span className="hidden xl:inline">Login</span>
        </NavLink>
      )}
    </div>
  );
};

export default DesktopActions;
