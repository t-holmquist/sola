import Footer from "@/components/footer";
import KaffebarGallery from "@/components/kaffebarGallery";
import { KaffeBarGrid } from "@/components/kaffebarGrid";
import { TextParallaxContent } from "@/components/textParallaxContent";


export default function Home() {
  return (
    <main className="bg-[#f0efd6]">
    <TextParallaxContent
    imgPath="/office5.jpg"
    subheading="Kaffebar og Kontorfællesskab"
    heading="SOLA"
    href="/"
    buttonText="Gå til Kontorfælleskab"
    buttonColor="bg-secondary"
    animationType="page-transition-kontor"
      >
        <></>
      </TextParallaxContent>
      <KaffeBarGrid />
      <KaffebarGallery /> 
      <Footer footerColor="bg-secondary"/>
    </main>
  )
}
