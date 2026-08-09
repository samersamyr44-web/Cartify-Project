import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import useAuth from "../../../hooks/useAuth";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Categories",
    path: "/categories",
  },
];

const NavLinkStyle = ({ isActive }) =>
  isActive
    ? "text-[var(--color-primary)]"
    : "text-[var(--color-text)] hover:text-[var(--color-primary)] transition duration-300";

const MobileSidebar = ({ open, setOpen, wishlistItems, totalQuantity }) => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            bg-[var(--color-overlay)]
            z-40
          "
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-[70%]
          bg-[var(--color-background)]
          text-[var(--color-text)]
          z-50
          transition-transform
          duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar Header */}

        <div
          className="
            p-5
            border-b
            border-[var(--color-border)]
          "
        >
          <Logo />
        </div>

        {/* Sidebar Links */}

        <nav
          className="
            flex
            flex-col
            gap-5
            p-6
          "
        >
          {/* Main Navigation */}

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={NavLinkStyle}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Wishlist */}

          <NavLink
            to="/wishlist"
            onClick={() => setOpen(false)}
            className={NavLinkStyle}
          >
            Wishlist ({wishlistItems.length})
          </NavLink>

          {/* Cart */}

          <NavLink
            to="/cart"
            onClick={() => setOpen(false)}
            className={NavLinkStyle}
          >
            Cart ({totalQuantity})
          </NavLink>

          {/* Authentication */}

          {isAuthenticated ? (
            <NavLink
              to="/profile"
              onClick={() => setOpen(false)}
              className={NavLinkStyle}
            >
              Profile
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className={NavLinkStyle}
            >
              Login
            </NavLink>
          )}
        </nav>
      </aside>
    </>
  );
};

export default MobileSidebar;
