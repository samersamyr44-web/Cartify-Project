import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { getProductById } from "../services/productService";

import Button from "../components/ui/Button";
import Ratings from "../components/ui/Ratings";
import Loader from "../components/UI/Loader";

import useCart from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";

import { FaHeart } from "react-icons/fa";

import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useCart();

  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch(() => {
        // Failed to fetch product
      });
  }, [id]);

  if (!product) {
    return <Loader />;
  }

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
        max-w-7xl
        mx-auto
        p-5
        grid
        grid-cols-1
        md:grid-cols-2
        gap-10
      "
    >
      {/* Product Images Slider */}

      <div
        className="
          bg-[var(--color-card)]
          rounded-xl
          p-5
          shadow-md
          transition
          duration-300
          hover:shadow-xl
          animate-[productDetailsIn_0.5s_ease-out_both]
        "
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          className="h-96"
        >
          {product.images.map((image) => (
            <SwiperSlide key={image}>
              <div
                className="
                  flex
                  justify-center
                  items-center
                  h-96
                "
              >
                <img
                  src={image}
                  alt={product.title}
                  className="
                    w-full
                    h-full
                    object-contain
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Product Information */}

      <div
        className="
          animate-[productInfoIn_0.5s_ease-out_0.15s_both]
        "
      >
        <h1
          className="
            text-3xl
            font-bold
          "
        >
          {product.title}
        </h1>

        <p
          className="
            mt-4
            opacity-70
          "
        >
          {product.description}
        </p>

        <p
          className="
            mt-5
            text-3xl
            font-bold
            text-[var(--color-primary)]
          "
        >
          {product.price} $
        </p>

        <div className="mt-4">
          <Ratings rating={product.rating} />
        </div>

        <div
          className="
            mt-5
            space-y-2
          "
        >
          <p>
            Category:
            <span
              className="
                font-bold
                ml-2
              "
            >
              {product.category}
            </span>
          </p>

          <p>
            Brand:
            <span
              className="
                font-bold
                ml-2
              "
            >
              {product.brand}
            </span>
          </p>

          <p>
            Stock:
            <span
              className="
                font-bold
                ml-2
              "
            >
              {product.stock}
            </span>
          </p>
        </div>

        {/* Actions */}

        <div
          className="
            mt-7
            flex
            items-center
            gap-5
          "
        >
          <Button onClick={handleAddToCart}>Add To Cart</Button>

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
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
