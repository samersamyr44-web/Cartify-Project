import { NavLink } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";

import LightLogo from "../../../assets/logos/light_mode_logo.png";
import DarkLogo from "../../../assets/logos/dark_mode_llogo.png";

const Logo = ({ className = "w-[160px] h-[60px]" }) => {
  const { theme } = useTheme();

  return (
    <NavLink to="/">
      <img
        src={theme === "dark" ? DarkLogo : LightLogo}
        alt="Cartify"
        className={`${className} object-contain`}
      />
    </NavLink>
  );
};

export default Logo;
