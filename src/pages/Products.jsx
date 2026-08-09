import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProducts, getProductByCategory } from "../services/productService";

import ProductCard from "../components/product/ProductCard";
import Loader from "../components/UI/Loader";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const { category } = useParams();

  const limit = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const skip = (currentPage - 1) * limit;

        let res;

        if (category) {
          res = await getProductByCategory(category, limit, skip);
        } else {
          res = await getProducts(limit, skip);
        }

        setProducts(res.data.products);
      } catch {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, currentPage]);

  const handleNext = () => {
    if (products.length === limit) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div
        className="
      text-center
      text-red-500
      mt-10
      "
      >
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto my-6 px-5">
      {/* Products Grid */}

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

      {/* Pagination */}

      <div
        className="
  flex
  items-center
  justify-center
  gap-5
  mt-10
  "
      >
        {/* Previous Arrow */}

        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`
   text-6xl
      flex
      items-center
      justify-center
     
      transition
      duration-300

      text-[var(--color-text)]

      ${currentPage === 1 ? "opacity-40" : "hover:opacity-50 hover:scale-110 "}
    `}
        >
          ←
        </button>

        {/* Current Page */}

        <span
          className="
    text-[var(--color-text)]
    font-semibold
    text-lg
    "
        >
          Page {currentPage}
        </span>

        {/* Next Arrow */}

        <button
          onClick={handleNext}
          disabled={products.length < limit}
          className={`
     text-6xl
      flex
      items-center
      justify-center
     
      transition
      duration-300

      text-[var(--color-text)]


      ${
        products.length < limit
          ? "opacity-40 "
          : " hover:opacity-50 hover:scale-110"
      }
    `}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Products;
