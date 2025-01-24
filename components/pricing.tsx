'use client'

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";


export const Pricing = () => {
  return (
    <motion.div 
    className="flex justify-center"
    initial={{
      x:-40,
      opacity:0
    }}
    whileInView={{
      x:0,
      opacity: 1
    }}
    transition={{
      duration: 0.4,
      delay: 0.2
    }}
    viewport={{
      once: true
    }}
    >
        <div className="relative flex flex-col items-center bg-accent rounded-2xl p-10 gap-5 text-center">
            <Image src='/line-drawing.png' width={450} height={250} alt="people-line-drawing" className="absolute hidden sm:block -top-10 -left-[430px]"/>
            <Image src='/line-drawing.png' width={270} height={150} alt="people-line-drawing" className="absolute sm:hidden -top-[170px]"/>
            <h2 className="text-4xl font-gothic md:text-6xl text-white">PRIS PÅ KONTORPLADS</h2>
            <p className="text-white font-sans font-bold max-w-lg">2200 kr. ex moms</p>
            <p className="text-white font-sans max-w-md">Hvis du er i tvivl om det er noget for dig, er du altid velkommen til at kigge forbi!</p>
            <Button text="Få en rundvisning" className="bg-white text-black font-sans" link="#contact"/>
        </div>
    </motion.div>
  )
}

export default Pricing;