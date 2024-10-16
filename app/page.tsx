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
        subheading="KAFFEBAR & KONTORFÆLLESSKAB"
        heading="SOLA"
        href="/kaffebar"
        buttonText="Gå til kaffebar"
        buttonColor="bg-primary"
        animationType="page-transition-kaffebar"
        heroImageAlign="bg-[62%]"
      >
        <></>
      </TextParallaxContent>
      <BouncyCardsFeatures />
      <Pricing />
      <Gallery /> 
      <Contact />
      <Footer footerColor="bg-primary" hasRapportLogo={false}/>
      
    </main>
  );
};
