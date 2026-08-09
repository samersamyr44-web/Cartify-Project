import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import PromoBanner from "../components/home/PromoBanner";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection/>
      <FeaturedProducts/>
      <PromoBanner/>
      <Newsletter/>
    </>
  );
};

export default Home;