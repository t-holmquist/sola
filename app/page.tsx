import { BouncyCardsFeatures } from "@/components/bouncyCardGrid";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Pricing from "@/components/pricing";
import { TextParallaxContent } from "@/components/textParallaxContent";


export default function Home() {
  return (
    <main className="bg-[#f0efd6] flex flex-col gap-20">
      <TextParallaxContent
        imgPath="/Hero-kontor.webp"
        subheading="Kaffebar og Kontorfællesskab"
        heading="SOLA"
        href="/kaffebar"
        buttonText="Gå til Kaffebar"
        buttonColor="bg-primary"
        animationType="page-transition-kaffebar"
      >
        <></>
      </TextParallaxContent>
      <BouncyCardsFeatures />
      <Pricing />
      <Gallery /> 
      <Contact />
      <Footer footerColor="bg-primary" />
      
    </main>
  );
};
