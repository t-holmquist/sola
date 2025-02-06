'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const KaffebarGallery = () => {
  return (
    <motion.div 
    className="grid grid-cols-12 gap-8 lg:gap-12 px-5 lg:px-32 sm:mt-[140px] mb-[120px] sm:mb-[150px]"
    initial={{
      x:-20,
      opacity:0,
    }}
    whileInView={{
      x:0,
      opacity: 1,
    }}
    transition={{
      duration: 0.4,
      delay: 0.2
    }}
    viewport={{
      once: true
    }}
    >
        <Image
        src='/kaffebar2.webp'
        width={660}
        height={240}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-6 border border-accent"
        />
        <Image
        src='/kaffebar1.webp'
        width={660}
        height={240}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-6 border border-accent"
        />
        <Image
        src='/kaffebar4.webp'
        width={660}
        height={240}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-6 border border-accent"
        />
        <Image
        src='/kaffebar3.webp'
        width={660}
        height={240}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-6 border border-accent"
        />
        
    </motion.div>
  )
}

export default KaffebarGallery;