import AboutSola from "@/components/aboutSola";
import Community from "@/components/community";
import Contact from "@/components/contact";
import Floorplan from "@/components/floorplan";
import Footer from "@/components/footer";
import OfficeGallery from "@/components/officeGallery";
import { TextParallaxContent } from "@/components/textParallaxContent";


export default function Home() {
  return (
    <>
      <main className="space-y-12 md:space-y-24">
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
        <div className="flex flex-col px-8 md:px-14 lg:px-20">
          <Community />
        </div>
        <div className="greenBackgroundFade rounded-t-3xl p-8 md:p-14 lg:p-20">
          <Floorplan />
          <OfficeGallery />
        </div>
        <div className="flex flex-col px-8 md:px-14 lg:px-20 gap-44">
          <AboutSola />
          <Contact />
        </div>
      </main>
      <Footer footerColor="bg-primary" hasRapportLogo={false}/>
    </>
  );
};
