import Image from "next/image";
import { Button } from "./ui/button";


export const Pricing = () => {
  return (
    <div className="flex justify-center mt-28 mx-5">
        <div className="flex flex-col items-center bg-accent rounded-2xl p-10 gap-5 text-center">
            <h2 className="text-2xl font-bold md:text-4xl text-white">Fast pris på kontorpladser</h2>
            <p className="text-white font-bold max-w-lg">2000,- eksklusiv moms pr. plads</p>
            <p className="text-white font-normal max-w-md">Hvis du er i tvivl om det er noget for dig, er du altid velkommen til at kigge forbi!</p>
            <Button text="Stik mig en rundvisning" className="bg-primary" link="mailto:kontakt@epilog.dk"/>
        </div>
    </div>
  )
}

export default Pricing;