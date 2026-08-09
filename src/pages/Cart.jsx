import useCart from "../hooks/useCart";
import CartItem from "../components/cart/CartItem";
import EmptyCart from "../components/cart/EmptyCart";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  // Get cart products from Cart Context
  const { cartItems } = useCart();

  return (
    <div
      className="
      min-h-screen
      bg-[var(--color-background)]
      text-[var(--color-text)]
      p-5
      "
    >

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>


      {/* Check if cart is empty */}
      {cartItems.length === 0 ? (

        // Show empty cart design
        <EmptyCart />

      ) : (

        // Products + Summary layout
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-4
          gap-6
          "
        >

          {/* Products Section */}
          <div
            className="
            lg:col-span-3
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            "
          >

            {cartItems.map((item) => (

              // Single cart product
              <CartItem
                key={item.id}
                item={item}
              />

            ))}

          </div>


          {/* Summary Section */}
          <div>
            <CartSummary />
          </div>


        </div>

      )}

    </div>
  );
};

export default Cart;