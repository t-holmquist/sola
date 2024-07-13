import Image from "next/image";
import { Button } from "./button";


export const Pricing = () => {
  return (
    <div className="flex justify-center mt-24 mx-5">
        <div className="flex flex-col items-center bg-accent rounded-2xl p-10 gap-5 text-center">
            <h2 className="text-2xl font-bold md:text-4xl text-black">Fast pris på kontorpladser</h2>
            <p className="text-black font-bold max-w-lg">2000,- eksklusiv moms pr. plads</p>
            <p className="text-slate-700 font-normal max-w-md">Hvis du er i tvivl om det er noget for dig, er du altid velkommen til at kigge forbi!</p>
            <Button text="Stik mig en rundvisning" className="bg-primary" link="mailto:kontakt@epilog.dk"/>
        </div>
    </div>
  )
}

export default Pricing;