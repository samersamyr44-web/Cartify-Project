import { useState } from "react";

import NavLinks from "./NavLinks";
import Logo from "./Logo";
import DesktopActions from "./DesktopActions";
import MobileMenu from "./MobileMenu";
import MobileSidebar from "./MobileSidebar";
import SearchBar from "./SearchBar";

import useTheme from "../../../hooks/useTheme";
import useCart from "../../../hooks/useCart";
import useWishlist from "../../../hooks/useWishlist";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const { totalQuantity } = useCart();

  const { wishlistItems } = useWishlist();

  return (
    <header
      className="
        relative
        flex
        items-center
        justify-between
        px-5
        lg:px-8
        py-4
        bg-[var(--color-background)]
        text-[var(--color-text)]
        border-b
        border-[var(--color-border)]
      "
    >
      {/* Logo */}

      <Logo />

      {/* Desktop Navigation */}

      <div
        className="
          hidden
          lg:flex
          items-center
          gap-8
        "
      >
        <NavLinks />

        <SearchBar />
      </div>

      {/* Desktop Actions */}

      <DesktopActions />

      {/* Mobile Actions */}

      <div
        className="
          flex
          items-center
          gap-4
          lg:hidden
        "
      >
        <MobileMenu
          open={open}
          setOpen={setOpen}
          theme={theme}
          toggleTheme={toggleTheme}
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
        />
      </div>

      {/* Mobile Search Dropdown */}

      {searchOpen && (
        <div
          className="
            absolute
            top-full
            left-0
            w-full
            px-5
            py-3
            bg-[var(--color-background)]
            shadow-md
            lg:hidden
            z-30
          "
        >
          <SearchBar
            mobile
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
          />
        </div>
      )}

      {/* Mobile Sidebar */}

      <MobileSidebar
        open={open}
        setOpen={setOpen}
        wishlistItems={wishlistItems}
        totalQuantity={totalQuantity}
      />
    </header>
  );
};

export default Navbar;
