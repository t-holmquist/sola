import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import { KaffeBarGrid } from "@/components/kaffebarGrid";
import { TextParallaxContent } from "@/components/textParallaxContent";


export default function Home() {
  return (
    <main className="bg-[#f0efd6]">
    <TextParallaxContent
    imgPath="/office5.jpg"
    subheading="Velkommen til vores hyggelige kaffebar"
    heading="SOLA"
    href="/"
    buttonText="Gå til Kontorfælleskab"
    buttonColor="bg-secondary"
    animationType="page-transition-kontor"
      >
        <></>
      </TextParallaxContent>
      <KaffeBarGrid />
      <Gallery /> 
      <Footer footerColor="bg-secondary"/>
    </main>
  )
}
