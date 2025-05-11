import Image from "next/image";
import ImageSlider from "../components/ui/ImageSlider";

export default function HeroSection() {
  return (
    <div className="section ">
        <div className="hero-slider swiper-container slider-nav-style-1 slider-dot-style-1 dot-color-white">
            <ImageSlider />
        </div>
    </div>
    
  )
}
