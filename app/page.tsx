import Community from "@/components/community";
import Contact from "@/components/contact";
import Floorplan from "@/components/floorplan";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";
import { TextParallaxContent } from "@/components/textParallaxContent";


export default function Home() {
  return (
    <>
      <main className="space-y-36">
        <TextParallaxContent
          imgPath="/hero-kontor2.webp"
          subheading="KAFFEBAR & KONTORFÆLLESSKAB"
          heading="SOLA"
          href="/kaffebar"
          buttonText="Kaffebar"
          buttonColor="bg-secondary"
          hasSecondButton={true}
          animationType="page-transition-kaffebar"
          heroImageAlign="bg-[62%]"
        >
          <></>
        </TextParallaxContent>
        <div className="flex flex-col px-5 lg:px-20">
          <Community />
        </div>
        
        <div className="flex flex-col px-5 lg:px-20 gap-96">
          <Pricing /> 
          <Contact />
        </div>
      </main>
      <Footer footerColor="bg-primary" hasRapportLogo={false}/>
    </>
  );
};
