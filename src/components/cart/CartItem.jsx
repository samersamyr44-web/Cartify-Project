import useCart from "../../hooks/useCart";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
    toast.success("Product removed from cart");
  };

  return (
    <div
        className="
        relative
        bg-[var(--color-card)]
        rounded-xl
        p-4
        shadow-md
        transition
        duration-300
        hover:shadow-xl
        animate-[cartItemIn_0.4s_ease-out_both]
      "
    >
      {/* Remove Icon */}

      <button
        onClick={handleRemove}
        className="
          absolute
          top-3
          right-3
          text-red-500
          hover:scale-110
          transition
        "
      >
        <FiTrash2 size={20} />
      </button>

      {/* Image */}

      <div className="flex justify-center items-center h-48">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Name */}

      <h2 className="mt-4 font-bold text-lg text-center line-clamp-1">
        {item.title}
      </h2>

      {/* Quantity */}

      <div
        className="
          flex
          justify-center
          items-center
          gap-4
          mt-4
        "
      >
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="
            w-9
            h-9
            rounded-full
            flex
            items-center
            justify-center
            bg-[var(--color-button)]
            text-[var(--color-button-text)]
            hover:scale-110
            transition
          "
        >
          <FiMinus size={16} />
        </button>

        <span className="font-bold">{item.quantity}</span>

        <button
          onClick={() => increaseQuantity(item.id)}
          className="
            w-9
            h-9
            rounded-full
            flex
            items-center
            justify-center
            bg-[var(--color-button)]
            text-[var(--color-button-text)]
            hover:scale-110
            transition
          "
        >
          <FiPlus size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
