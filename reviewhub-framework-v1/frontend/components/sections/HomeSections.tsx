import Categories from "./Categories";
import FeaturedBrands from "./FeaturedBrands";
import TrendingReviews from "./TrendingReviews";
import Newsletter from "./Newsletter";
import Footer from "../layout/Footer";

export default function HomeSections() {
  return (
    <>
      <Categories />
      <FeaturedBrands />
      <TrendingReviews />
      <Newsletter />
      <Footer />
    </>
  );
}
