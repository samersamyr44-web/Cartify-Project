import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getProducts } from "../../services/productService";
import ProductCard from "../../components/product/ProductCard";
import Loader from "../../components/UI/Loader";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await getProducts(8, 0);

        setProducts(res.data.products);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);

        setError("Unable to load featured products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        {/* Header */}

        <div
          className="
            flex
            justify-between
            items-center
            mb-8
          "
        >
          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
            "
          >
            Featured Products
          </h2>

          <NavLink
            to="/products"
            className="
              text-[var(--color-primary)]
              font-medium
              hover:underline
            "
          >
            View All
          </NavLink>
        </div>

        {/* Loading */}

        {loading && <Loader />}

        {/* Error */}

        {!loading && error && (
          <div
            className="
              min-h-[200px]
              flex
              items-center
              justify-center
              text-center
            "
          >
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Products Grid */}

        {!loading && !error && (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
            "
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
