import { BouncyCardsFeatures } from "@/components/bouncyCardGrid";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HorizontalScrollContent from "@/components/horizontalScrollCarousel";
import Pricing from "@/components/pricing";
import { TextParallaxContent } from "@/components/textParallaxContent";


export default function Home() {
  return (
    <main className="bg-[#f0efd6]">
      <TextParallaxContent
        imgPath="/office.jpg"
        subheading="Kaffebar og kontorfællesskab"
        heading="SOLA"
      >
        <></>
      </TextParallaxContent>
      <BouncyCardsFeatures />
      <Pricing />
      <HorizontalScrollContent /> 
      <Contact />
      <Footer />
      
    </main>
  );
};
