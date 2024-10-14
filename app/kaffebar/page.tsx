import Footer from "@/components/footer";
import KaffebarGallery from "@/components/kaffebarGallery";
import { KaffeBarGrid } from "@/components/kaffebarGrid";
import { TextParallaxContent } from "@/components/textParallaxContent";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "SOLA kaffebar",
  description: "Kaffebaren serverer økologisk bagværk og kaffe alle dage i ugen. Der er brætspil, pladser udendørs og kolde drikke i køleskabet.",
};

export default function Home() {
  return (
    <main className="bg-[#f0efd6]">
    <TextParallaxContent
    imgPath="/Hero-kaffebar.webp"
    subheading="KAFFEBAR & KONTORFÆLLESSKAB"
    heading="SOLA"
    href="/"
    buttonText="GÅ TIL KONTORFÆLLESSKAB"
    buttonColor="bg-secondary"
    animationType="page-transition-kontor"
    heroImageAlign="bg-[22%]"
      >
        <></>
      </TextParallaxContent>
      <KaffeBarGrid />
      <KaffebarGallery /> 
      <Footer footerColor="bg-secondary" hasRapportLogo={true}/>
    </main>
  )
}
