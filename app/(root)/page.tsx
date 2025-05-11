import HeroSection from "../components/HeroSection";
import BannerSection from "../components/BannerSection";
import ProductSection from "../components/ProductSection";
import BannerSectionHome2 from "../components/BannerSectionHome2";
import BlogHome from "../components/BlogHome";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BannerSection />
      
      <ProductSection
        title="Sản phẩm bán chạy"
        desc="Khám phá những sản phẩm đèn trang trí phổ biến nhất, mang đến không gian sống hoàn hảo cho ngôi nhà của bạn."
        category="bestSellerProduct"
      />

      <BannerSectionHome2 />

      <ProductSection
        title="Sản phẩm mới"
        desc="Khám phá các sản phẩm đèn mới nhất, mang đến những xu hướng chiếu sáng hiện đại và tinh tế cho không gian sống của bạn."
        category="newProduct"
      />

      <BlogHome />
    </>
  )
}
