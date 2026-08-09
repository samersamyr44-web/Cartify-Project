import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
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
      <FiShoppingCart
        size={70}
        className="opacity-50"
      />

      <h2 className="text-2xl font-bold mt-5">
        Your cart is empty
      </h2>

      <p className="mt-2 opacity-70">
        Looks like you haven't added any products yet
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
        Continue Shopping
      </NavLink>
    </div>
  );
};

export default EmptyCart;