import { useEffect, useState } from "react";

import { getCategories } from "../services/categoryService";
import { getProducts } from "../services/productService";

import CategoryCard from "../components/category/CategoryCard";
import Loader from "../components/ui/Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);

        const categoriesRes = await getCategories();

        const productsRes = await getProducts(200, 0);

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
      } catch {
        // Failed to fetch categories
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  if (loading) {
    return <Loader />;
  }

  return (
    <section
      className="
        w-full
        bg-[var(--color-background)]
        text-[var(--color-text)]
        py-12
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          md:px-10
        "
      >
        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            mb-10
          "
        >
          Categories
        </h1>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            gap-6
          "
        >
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
