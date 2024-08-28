'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
  return (
    <motion.div 
    className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-32 mb-40 sm:mb-72 px-5 sm:gap-0 gap-6"
    initial={{
      y:20,
      opacity:0,
    }}
    whileInView={{
      y:0,
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
        src='/Hero-kontor.webp'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl"
        />
        <Image
        src='/Hero-kontor.webp'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl sm:hidden"
        />
    </motion.div>
  )
}

export default Gallery;