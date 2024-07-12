import { BouncyCardsFeatures } from "@/components/bouncyCardGrid";
import HorizontalScrollContent from "@/components/horizontalScrollCarousel";
import { TextParallaxContent } from "@/components/textParallaxContent";


export default function Home() {
  return (
    <div className="bg-[#f0efd6]">
      <TextParallaxContent
        imgPath="/office.jpg"
        subheading="Kaffebar og kontorfællesskab"
        heading="SOLA"
      >
        <BouncyCardsFeatures />
        <HorizontalScrollContent /> 
      </TextParallaxContent>
      
    </div>
  );
};
