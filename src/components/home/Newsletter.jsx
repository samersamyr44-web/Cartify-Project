import { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Subscribed successfully!");

    setEmail("");
  };

  return (
    <section
      className="
        w-full
        bg-[var(--color-background)]
        py-12
        md:py-20
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
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            bg-[var(--color-card)]
            p-8
            md:p-12
            text-center
            shadow-lg
          "
        >
          {/* Background Effect */}

          <div
            className="
              absolute
              -top-20
              left-1/2
              -translate-x-1/2
              w-72
              h-72
              rounded-full
              bg-[var(--color-primary)]
              opacity-10
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
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
              Stay Updated
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                mx-auto
                text-lg
                text-[var(--color-text-secondary)]
              "
            >
              Subscribe to get the latest products, offers and exclusive
              discounts.
            </p>

            <form
              onSubmit={handleSubmit}
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-4
                max-w-xl
                mx-auto
              "
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  flex-1
                  px-5
                  py-3
                  rounded-lg
                  bg-[var(--color-background)]
                  text-[var(--color-text)]
                  border
                  border-[var(--color-border)]
                  outline-none
                  focus:ring-2
                  focus:ring-[var(--color-primary)]
                "
                required
              />

              <button
                type="submit"
                className="
                  px-7
                  py-3
                  rounded-lg
                  bg-[var(--color-button)]
                  text-[var(--color-button-text)]
                  hover:bg-[var(--color-button-hover)]
                  transition
                  duration-300
                  hover:scale-105
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
