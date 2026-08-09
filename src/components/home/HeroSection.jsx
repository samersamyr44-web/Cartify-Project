import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../assets/images/image.png";

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section
      className="
        w-full
        bg-[var(--color-background)]
        text-[var(--color-text)]
        transition-colors
        duration-300
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          md:px-10
          py-12
          md:py-20
          grid
          md:grid-cols-2
          gap-10
          items-center
        "
      >
        {/* Hero Content */}

        <div
          className="
    order-2
    md:order-1
    hero-fade-left
  "
        >
          <h1
            className="
      text-4xl
      md:text-6xl
      font-bold
      leading-tight
    "
          >
            Discover Products
            <span
              className="
        text-[var(--color-primary)]
      "
            >
              {" "}
              You Love
            </span>
          </h1>

          <p
            className="
      mt-5
      max-w-lg
      text-lg
      text-[var(--color-text-secondary)]
    "
          >
            Shop the latest products with the best quality and enjoy a simple
            and smooth shopping experience.
          </p>

          <div className="mt-8">
            <Button onClick={()=>navigate("/products")}>Shop Now</Button>
          </div>
        </div>

        {/* Hero Image */}

        <div
          className="
    order-1
    md:order-2
    flex
    justify-center
    items-center
    w-full
        hero-fade-right
  "
        >
          <img
            src={HeroImage}
            alt="Shopping"
            className=" 
  w-full
  max-w-[350px]
  sm:max-w-[400px]
  md:w-[700px]
  lg:w-[800px]
  xl:w-[1300px]
  object-contain

      drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]
      dark:drop-shadow-[0_25px_25px_rgba(0,0,0,0.55)]
      transition-transform
      duration-300
      hover:scale-105
    "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
