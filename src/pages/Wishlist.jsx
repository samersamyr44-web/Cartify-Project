import ProductCard from "../components/product/ProductCard";
import EmptyWishlist from "../components/wishlist/EmptyWishlist";
import useWishlist from "../hooks/useWishlist";

const Wishlist = () => {
  const { wishlistItems } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <h1 className="text-3xl font-bold mb-8 text-[var(--color-text)]">
        My Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {wishlistItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;