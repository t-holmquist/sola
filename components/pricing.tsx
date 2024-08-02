import Image from "next/image";
import { Button } from "./ui/button";


export const Pricing = () => {
  return (
    <div className="flex justify-center mt-28 mx-5">
        <div className="relative flex flex-col items-center bg-accent rounded-2xl p-10 gap-5 text-center">
            <Image src='/line-drawing.png' width={450} height={250} alt="people-line-drawing" className="absolute hidden sm:block -top-10 -left-[430px]"/>
            <Image src='/line-drawing.png' width={200} height={150} alt="people-line-drawing" className="absolute sm:hidden -top-[100px]"/>
            <h2 className="text-4xl font-gothic md:text-6xl text-white">FAST PRIS PÅ KONTORPLADS</h2>
            <p className="text-white font-sans font-bold max-w-lg">0000,- eksklusiv moms pr. plads</p>
            <p className="text-white font-sans max-w-md">Hvis du er i tvivl om det er noget for dig, er du altid velkommen til at kigge forbi!</p>
            <Button text="Få en rundvisning" className="bg-primary font-sans" link="mailto:kontakt@epilog.dk"/>
        </div>
    </div>
  )
}

export default Pricing;