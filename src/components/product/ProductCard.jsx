import toast from "react-hot-toast";

import Ratings from "../ui/Ratings";
import Button from "../ui/Button";
import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const { toggleWishlist, isInWishlist } = useWishlist();

  const navigate = useNavigate();

  const liked = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart");
  };

  const handleWishlist = () => {
    toggleWishlist(product);

    if (liked) {
      toast("Removed from wishlist");
    } else {
      toast.success("Added to wishlist");
    }
  };

  return (
    <div
      className="
      bg-[var(--color-card)]
      rounded-xl
      p-4
      shadow-md
      flex
      flex-col
      h-full
      transition
      duration-300
      hover:scale-[1.02]
      card-fade-up
    "
    >
      {/* Image */}

      <div
        className="
          flex
          justify-center
          items-center
          h-48
        "
      >
        <img
          className="
            h-full
            w-full
            object-contain
            transition
            duration-300
            hover:scale-105
          "
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      {/* Info */}

      <div
        className="
          mt-4
          flex
          flex-col
          flex-1
        "
      >
        <h2
          className="
            font-bold
            text-lg
            line-clamp-1
          "
        >
          {product.title}
        </h2>

        <p
          className="
            text-sm
            opacity-70
            mt-2
            line-clamp-2
          "
        >
          {product.description}
        </p>

        <p
          className="
            mt-2
            text-2xl
            font-bold
            text-[var(--color-primary)]
          "
        >
          {product.price} $
        </p>

        <div className="mt-2">
          <Ratings rating={product.rating} />
        </div>

        {/* Actions */}

        <div
          className="
            mt-auto
            pt-5
            flex
            items-center
            justify-between
            gap-2
          "
        >
          {/* Add To Cart */}

          <Button onClick={handleAddToCart}>Add To Cart</Button>

          {/* Wishlist */}

          <button
            onClick={handleWishlist}
            className="
              text-3xl
              transition
              hover:scale-110
            "
          >
            <FaHeart className={liked ? "text-red-500" : "text-gray-400"} />
          </button>

          {/* View Product */}

          <button
            onClick={() => navigate(`/products/${product.id}`)}
            className="
              px-4
              py-2
              rounded-lg
              border
              border-[var(--color-primary)]
              text-[var(--color-primary)]
              hover:bg-[var(--color-primary)]
              hover:text-white
              hover:scale-105
              transition
            "
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
