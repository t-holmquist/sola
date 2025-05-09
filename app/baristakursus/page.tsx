import BaristaSection from "@/components/barista"
import Footer from "@/components/footer"
import { TextParallaxContent } from "@/components/textParallaxContent"




const Home = () => {
  return (
    <main className="bg-background">
        <TextParallaxContent
        imgPath="/espresso.webp"
        subheading="Baristakursus hos SOLA – juni 2025"
        heading="BLIV BARISTA"
        href="/baristakursus/#tilmeld"
        buttonText="Tilmeld dig"
        buttonColor="bg-secondary"
        hasSecondButton = {false}
        animationType="page-transition-kontor"
        heroImageAlign="bg-[22%]"
        >
            <></>
        </TextParallaxContent>
        <div className="p-8 md:p-14 lg:p-20">
          <BaristaSection />
        </div>
        <Footer footerColor="bg-secondary" hasRapportLogo={true}/>
    </main>
  )
}

export default Home