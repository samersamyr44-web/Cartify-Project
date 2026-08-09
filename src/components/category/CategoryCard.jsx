import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <NavLink
      to={`/products/category/${category.slug}`}
      className="
      bg-[var(--color-card)]
      text-[var(--color-text)]
      rounded-xl
      overflow-hidden
      shadow-md
      hover:shadow-xl
      transition
      duration-300
      hover:-translate-y-1
      text-center
      card-fade-up
      "
    >
      {/* Category Image */}

      <div
        className="
          h-40
          w-full
          overflow-hidden
        "
      >
        <img
          src={category.image}
          alt={category.name}
          className="
            w-full
            h-full
            object-contain
            p-4
            transition
            duration-300
          "
        />
      </div>

      {/* Category Name */}

      <h3
        className="
          p-4
          text-lg
          font-semibold
          capitalize
        "
      >
        {category.name}
      </h3>
    </NavLink>
  );
};

export default CategoryCard;
