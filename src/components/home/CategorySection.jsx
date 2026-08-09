import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getCategories } from "../../services/categoryService";
import { getProducts } from "../../services/productService";

import CategoryCard from "../../components/category/CategoryCard";
import Loader from "../../components/ui/Loader";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError("");

        const categoriesRes = await getCategories();
        const productsRes = await getProducts(100, 0);

        const categoriesWithImages = categoriesRes.data.map((category) => {
          const product = productsRes.data.products.find(
            (product) => product.category === category.slug,
          );

          return {
            ...category,
            image: product?.images?.[0],
          };
        });

        setCategories(categoriesWithImages);
      } catch (error) {
        console.error("Failed to fetch categories:", error);

        setError("Unable to load categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        {/* Header */}

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Shop by Category</h2>

          <NavLink
            to="/categories"
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

        {/* Categories */}

        {!loading && !error && (
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-6
              gap-5
            "
          >
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
