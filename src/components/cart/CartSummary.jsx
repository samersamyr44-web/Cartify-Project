import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

import Button from "../ui/Button";
import Modal from "../ui/Modal";

const CartSummary = () => {
  const { totalQuantity, totalPrice } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoginRequiredOpen, setIsLoginRequiredOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    if (!user) {
      setIsLoginRequiredOpen(true);
      return;
    }

    setIsCheckoutOpen(true);
  };

  const handleGoToLogin = () => {
    setIsLoginRequiredOpen(false);
    navigate("/login");
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();

    toast.success("Order confirmed successfully!");

    setIsCheckoutOpen(false);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <>
      {/* Title */}

      <h2 className="text-xl font-bold">Cart Summary</h2>

      {/* Details */}

      <div className="mt-5 flex flex-col gap-4">
        {/* Items */}

        <div className="flex justify-between">
          <span>Items</span>

          <span className="font-bold">{totalQuantity}</span>
        </div>

        {/* Subtotal */}

        <div className="flex justify-between">
          <span>Subtotal</span>

          <span className="font-bold">${totalPrice}</span>
        </div>

        {/* Shipping */}

        <div className="flex justify-between">
          <span>Shipping</span>

          <span className="font-bold text-green-500">Free</span>
        </div>

        {/* Divider */}

        <hr className="opacity-20" />

        {/* Total */}

        <div className="flex justify-between text-lg">
          <span className="font-bold">Total</span>

          <span
            className="
              font-bold
              text-[var(--color-primary)]
            "
          >
            ${totalPrice}
          </span>
        </div>
      </div>

      {/* Checkout Button */}

      <div className="mt-5">
        <Button type="button" onClick={handleCheckout} className="w-full">
          Checkout
        </Button>
      </div>

      {/* Login Required Modal */}

      <Modal
        isOpen={isLoginRequiredOpen}
        onClose={() => setIsLoginRequiredOpen(false)}
        title="Login Required"
      >
        <div className="text-center">
          <p className="text-lg font-medium">
            Please log in to continue with checkout.
          </p>

          <p className="mt-2 text-sm opacity-70">
            You need to be logged in before you can complete your order.
          </p>

          <div className="mt-6 flex justify-center">
            <Button
              type="button"
              onClick={handleGoToLogin}
              className="px-8 py-3"
            >
              Go to Login
            </Button>
          </div>
        </div>
      </Modal>

      {/* Checkout Modal */}

      <Modal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        title="Checkout"
      >
        <form onSubmit={handleConfirmOrder} className="space-y-4">
          {/* Full Name */}

          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium"
            >
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="
                w-full
                px-4
                py-3
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-background)]
                text-[var(--color-text)]
                outline-none
                transition
                focus:border-[var(--color-primary)]
              "
            />
          </div>

          {/* Email */}

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="
                w-full
                px-4
                py-3
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-background)]
                text-[var(--color-text)]
                outline-none
                transition
                focus:border-[var(--color-primary)]
              "
            />
          </div>

          {/* Phone */}

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="
                w-full
                px-4
                py-3
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-background)]
                text-[var(--color-text)]
                outline-none
                transition
                focus:border-[var(--color-primary)]
              "
            />
          </div>

          {/* Address */}

          <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium">
              Address
            </label>

            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
              rows={3}
              className="
                w-full
                px-4
                py-3
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-background)]
                text-[var(--color-text)]
                outline-none
                resize-none
                transition
                focus:border-[var(--color-primary)]
              "
            />
          </div>

          {/* Actions */}

          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
            <Button
              type="button"
              onClick={() => setIsCheckoutOpen(false)}
              className="
                w-full
                bg-transparent
                border
                border-[var(--color-primary)]
                text-[var(--color-primary)]
                hover:bg-[var(--color-primary)]
                hover:text-[var(--color-primary-text)]
              "
            >
              Cancel
            </Button>

            <Button type="submit" className="w-full">
              Confirm Order
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CartSummary;
