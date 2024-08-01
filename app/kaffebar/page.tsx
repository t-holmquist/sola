import { BouncyCardsFeatures } from "@/components/bouncyCardGrid";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import { TextParallaxContent } from "@/components/textParallaxContent";


export default function Home() {
  return (
    <main className="bg-[#f0efd6]">
    <TextParallaxContent
    imgPath="/office2.jpg"
    subheading="Kaffebar og kontorfællesskab"
    heading="SOLA"
    href="/"
    buttonText="Gå til Kontor"
    animationType="page-transition-kontor"
      >
        <></>
      </TextParallaxContent>
      <BouncyCardsFeatures />
      <Gallery /> 
      <Contact />
      <Footer />
    </main>
  )
}
