import { NavLink } from "react-router-dom";

import { FiFacebook, FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      className="
        w-full
        bg-[var(--color-card)]
        text-[var(--color-text)]
        border-t
        border-[var(--color-border)]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          md:px-10
          py-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
          "
        >
          {/* Brand */}

          <div>
            <h2
              className="
                text-2xl
                font-bold
                text-[var(--color-primary)]
              "
            >
              Cartify
            </h2>

            <p
              className="
                mt-4
                text-[var(--color-text-secondary)]
                max-w-xs
              "
            >
              Your trusted online store for quality products and a smooth
              shopping experience.
            </p>

            <div
              className="
                flex
                gap-4
                mt-6
              "
            >
              <FiFacebook
                className="
                  cursor-pointer
                  hover:text-[var(--color-primary)]
                  transition
                "
              />

              <FiInstagram
                className="
                  cursor-pointer
                  hover:text-[var(--color-primary)]
                  transition
                "
              />

              <FiTwitter
                className="
                  cursor-pointer
                  hover:text-[var(--color-primary)]
                  transition
                "
              />

              <FiGithub
                className="
                  cursor-pointer
                  hover:text-[var(--color-primary)]
                  transition
                "
              />
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              className="
                font-semibold
                text-lg
                mb-4
              "
            >
              Quick Links
            </h3>

            <ul
              className="
                space-y-3
                text-[var(--color-text-secondary)]
              "
            >
              <li>
                <NavLink to="/" className="hover:text-[var(--color-primary)]">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products"
                  className="hover:text-[var(--color-primary)]"
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/categories"
                  className="hover:text-[var(--color-primary)]"
                >
                  Categories
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Categories */}

          <div>
            <h3
              className="
                font-semibold
                text-lg
                mb-4
              "
            >
              Categories
            </h3>
            <ul
              className="
    space-y-3
    text-[var(--color-text-secondary)]
  "
            >
              <li>
                <NavLink
                  to="/products/category/smartphones"
                  className="hover:text-[var(--color-primary)] transition"
                >
                  Smartphones
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products/category/beauty"
                  className="hover:text-[var(--color-primary)] transition"
                >
                  Beauty
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products/category/furniture"
                  className="hover:text-[var(--color-primary)] transition"
                >
                  Furniture
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products/category/groceries"
                  className="hover:text-[var(--color-primary)] transition"
                >
                  Groceries
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3
              className="
                font-semibold
                text-lg
                mb-4
              "
            >
              Contact
            </h3>

            <ul
              className="
                space-y-3
                text-[var(--color-text-secondary)]
              "
            >
              <li>Email: support@cartify.com</li>

              <li>Phone: +20 100 567 2453</li>

              <li>Egypt</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div
        className="
          border-t
          border-[var(--color-border)]
          py-5
          text-center
          text-sm
          text-[var(--color-text-secondary)]
        "
      >
        © {new Date().getFullYear()} Cartify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
