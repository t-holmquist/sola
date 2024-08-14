import Footer from "@/components/footer";
import KaffebarGallery from "@/components/kaffebarGallery";
import { KaffeBarGrid } from "@/components/kaffebarGrid";
import { TextParallaxContent } from "@/components/textParallaxContent";


export default function Home() {
  return (
    <main className="bg-[#f0efd6]">
    <TextParallaxContent
    imgPath="/Hero-kaffebar.webp"
    subheading="KAFFEBAR & KONTORFÆLLESSKAB"
    heading="SOLA"
    href="/"
    buttonText="Gå til KONTORFÆLLESSKAB"
    buttonColor="bg-secondary"
    animationType="page-transition-kontor"
    heroImageAlign="bg-[22%]"
      >
        <></>
      </TextParallaxContent>
      <KaffeBarGrid />
      <KaffebarGallery /> 
      <Footer footerColor="bg-secondary"/>
    </main>
  )
}
