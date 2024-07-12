import Image from "next/image";
import { Button } from "./button";


export const Pricing = () => {
  return (
    <div className="flex justify-center mt-24">
        <div className="relative flex flex-col items-center bg-accent rounded-2xl p-10 gap-3">
            <Image src="/icons/shape-triangles.svg" width={70} height={70} alt="graphic" className="absolute -left-10 -top-5"/>
            <h2 className="text-2xl font-bold md:text-2xl text-black">Fast pris på kontorpladser</h2>
            <p className="text-slate-700 font-bold max-w-lg">1000,- eksklusiv moms</p>
            <Button text="Stik mig en rundvisning" bgcolor="#39592c" link="mailto:kontakt@epilog.dk"/>
        </div>
    </div>
  )
}

export default Pricing;