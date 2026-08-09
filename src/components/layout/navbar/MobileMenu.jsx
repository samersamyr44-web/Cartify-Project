import { FiMenu, FiX, FiSun, FiMoon, FiSearch } from "react-icons/fi";

const MobileMenu = ({
  open,
  setOpen,
  theme,
  toggleTheme,
  searchOpen,
  setSearchOpen,
}) => {
  return (
    <>
      {/* Search */}

      <button
        type="button"
        onClick={() => setSearchOpen((prev) => !prev)}
        aria-label={searchOpen ? "Close search" : "Open search"}
        className="
          hover:text-[var(--color-primary)]
          transition
        "
      >
        {searchOpen ? <FiX size={26} /> : <FiSearch size={24} />}
      </button>

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

      {/* Menu */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="
          hover:text-[var(--color-primary)]
          transition
        "
      >
        {open ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>
    </>
  );
};

export default MobileMenu;
