import { NavLink } from "react-router-dom";

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

const NavLinks = () => {
  return (
    <nav
      className="
      hidden
      md:flex
      items-center
      gap-8
      font-medium
      "
    >
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={NavLinkStyle}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;