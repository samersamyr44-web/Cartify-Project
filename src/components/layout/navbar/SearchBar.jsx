import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import { searchProducts } from "../../../services/productService";

// SearchBar component
// Used for:
// - Desktop fixed search input
// - Mobile search opened from navbar icon
const SearchBar = ({ mobile = false, setSearchOpen }) => {
  // Current text written by user
  const [query, setQuery] = useState("");

  // Products returned from API
  const [results, setResults] = useState([]);

  // Controls showing/hiding dropdown results
  const [open, setOpen] = useState(false);

  // Used to detect clicks outside search box
  const searchRef = useRef();

  /*
    Search logic

    - Wait 500ms after typing (Debounce)
    - Prevents sending request on every keystroke
    - Calls API only when user stops typing
  */

  useEffect(() => {
    const timer = setTimeout(async () => {
      // If input is empty
      // Clear results and hide dropdown

      if (!query.trim()) {
        setResults([]);

        setOpen(false);

        return;
      }

      try {
        // Fetch products from API

        const res = await searchProducts(query);

        // Show only first 5 products
        // Change number here if you want more results

        setResults(res.data.products.slice(0, 5));

        // Open dropdown

        setOpen(true);
} catch {
  // API request failed
}
    }, 500);

    // Clear previous timer

    return () => clearTimeout(timer);
  }, [query]);

  /*
    Close dropdown when clicking outside search area

    Desktop:
    - Only closes results

    Mobile:
    - Can also close the search container
  */

  useEffect(() => {
    const handleOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpen(false);

        // Close mobile search completely

        if (mobile && setSearchOpen) {
          setSearchOpen(false);

          setQuery("");

          setResults([]);
        }
      }
    };

    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [mobile, setSearchOpen]);

  /*
    Runs when user selects a product

    - Clear input
    - Clear results
    - Close dropdown
    - Close mobile search
  */

  const selectProduct = () => {
    setQuery("");

    setResults([]);

    setOpen(false);

    if (mobile && setSearchOpen) {
      setSearchOpen(false);
    }
  };

  return (
    <div
      ref={searchRef}
      className="
      relative
      w-full
      "
    >
      {/* Search Input Container */}

      <div
        className="
        flex
        items-center
        gap-2
        w-full
        lg:w-[350px]
        px-4
        py-2
        rounded-full
        bg-[var(--color-card)]
        shadow-md
        "
      >
        {/* Search Icon */}

        <FiSearch size={20} />

        {/* Search Input */}

        <input
          // Automatically focus input on mobile opening

          autoFocus={mobile}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="
          w-full
          outline-none
          bg-transparent
          text-[var(--color-text)]
          "
        />
      </div>

      {/* Search Results Dropdown */}

      {open && (
        <div
          className="
            absolute
            top-14
            left-0
            w-full
            bg-[var(--color-background)]
            rounded-lg
            shadow-lg
            overflow-hidden
            z-50
            "
        >
          {results.length > 0 ? (
            // Render products when found

            results.map((product) => (
              <NavLink
                key={product.id}
                // Product details route

                to={`/products/${product.id}`}
                onClick={selectProduct}
                className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    hover:bg-[var(--color-primary)]
                    transition
                    "
              >
                {/* Product thumbnail */}

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="
                      w-10
                      h-10
                      rounded-md
                      object-cover
                      "
                />

                {/* Product name */}

                <span>{product.title}</span>
              </NavLink>
            ))
          ) : (
            // Message when API returns no products

            <div
              className="
                  px-4
                  py-3
                  text-center
                  text-[var(--color-text)]
                  "
            >
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
