import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { getProducts } from "../../services/productService";

import Loader from "../../components/ui/Loader";

import "swiper/css";
import "swiper/css/pagination";

const PromoBanner = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await getProducts(4, 0);

        setProducts(res.data.products);
      } catch (error) {
        console.error("Failed to fetch promo products:", error);

        setError("Unable to load promotional products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loader size="section" />;
  }

  if (error) {
    return (
      <section className="py-16">
        <div
          className="
            min-h-[300px]
            flex
            items-center
            justify-center
            text-center
          "
        >
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  if (!products.length) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          className="rounded-2xl"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                className="
                  relative
                  overflow-hidden
                  min-h-[400px]
                  md:min-h-[500px]
                  rounded-2xl
                  flex
                  flex-col-reverse
                  md:flex-row
                  items-center
                  justify-center
                  gap-8
                  p-8
                  md:p-12
                  bg-[var(--color-card)]
                "
              >
                {/* Background Effects */}

                <div
                  className="
                    absolute
                    -top-24
                    -right-24
                    w-80
                    h-80
                    rounded-full
                    bg-[var(--color-primary)]
                    opacity-20
                    blur-3xl
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-24
                    -left-24
                    w-72
                    h-72
                    rounded-full
                    bg-[var(--color-primary)]
                    opacity-10
                    blur-3xl
                  "
                />

                {/* Content */}

                <div
                  className="
                    relative
                    z-10
                    flex-1
                  "
                >
                  <h2
                    className="
                      text-3xl
                      md:text-5xl
                      font-bold
                      text-[var(--color-text)]
                    "
                  >
                    Mega Sale
                    <br />
                    Up To 50% OFF
                  </h2>

                  <p
                    className="
                      mt-4
                      text-lg
                      max-w-md
                      text-[var(--color-text-secondary)]
                    "
                  >
                    Discover amazing deals on your favorite products. Limited
                    time offers available now.
                  </p>

                  <button
                    type="button"
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="
                      mt-10
                      px-7
                      py-3
                      rounded-lg
                      bg-[var(--color-button)]
                      text-[var(--color-button-text)]
                      hover:bg-[var(--color-button-hover)]
                      hover:scale-105
                      transition
                      duration-300
                    "
                  >
                    Shop Now
                  </button>
                </div>

                {/* Image */}

                <div
                  className="
                    relative
                    z-10
                    flex-1
                    flex
                    justify-center
                  "
                >
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="
                      w-64
                      md:w-96
                      h-64
                      md:h-96
                      object-contain
                      drop-shadow-2xl
                      hover:scale-105
                      transition
                      duration-500
                    "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PromoBanner;
