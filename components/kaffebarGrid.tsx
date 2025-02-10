'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Infocard from "./infocard";

export const KaffeBarGrid = () => {

  const list = {
    hidden: {},
    visible: {}
  }

  const item = {
      hidden: { opacity: 0, y: 20},
      visible: { opacity: 1, y: 0}
  }

  return (
    <section className="mx-auto px-5 lg:px-32 text-black">
      <motion.div className="flex relative flex-col gap-8 mt-24"
      variants={list}
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.8, once: true}}
      transition={{
          staggerChildren: 0.3,
      }}
      >
        <Image src='/line-drawing2.png' width={460} height={200} alt="people-line-drawing" className="absolute hidden lg:block right-16 -top-28 z-10"/>
        <Image src='/line-drawing2.png' width={260} height={200} alt="people-line-drawing" className="absolute hidden sm:block lg:hidden right-0 -top-28 z-10"/>
        <Image src='/line-drawing2.png' width={150} height={120} alt="people-line-drawing" className="absolute sm:hidden left-8 -top-32 z-10"/>

        <motion.h2 className="text-5xl font-gothic md:text-7xl max-w-4xl relative z-20"
        variants={item}
        >
          Kom indenfor og nyd <span className="text-secondary">en varm kop kaffe</span> 
        </motion.h2>
        <motion.p className="text-black font-sans font-medium max-w-xl relative z-20"
        variants={item}
        >Vi serverer bæredygtig kaffe og bagværk i vores italiensk-inspirerede kaffebar i Sydhavnen. Vi stræber altid efter at skabe en hyggelig og hjemlig stemning, så vores gæster føler sig velkomne og godt tilpas. Inde bagved kaffebaren har vi et kontorfællesskab.</motion.p>
      </motion.div>
      <motion.div 
      className="grid grid-col-1 md:grid-cols-12 gap-8 sm:gap-4 mt-14"
      initial={{
        x:-10,
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
        <Infocard
        className="md:col-span-4 relative z-20"
        title="ÅBNINGSTIDER"
        description="Vi har åbent tirsdag-fredag fra 8-12 og 8-15 i weekenden."
        />
        <Infocard
        className="md:col-span-4 relative z-20"
        title="ADRESSEN"
        description="Johan Kellers Vej 1, 2450 København SV"
        />
        <Infocard
        className="md:col-span-4 relative z-20"
        title="MENUEN"
        description="God kaffe, bagværk og andre lækre sager i italiensk-inspirerede omgivelser"
        />
      </motion.div>

      {/* Menu gallery */}
      <motion.div 
      className="relative sm:flex-row mt-52 mb-[100px] sm:mb-[140px]"
      initial={{
        x:10,
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
        <Image src='/line-drawing.png' width={450} height={300} alt="people-line-drawing" className="absolute hidden sm:block -top-40 -left-0"/>
        <Image src='/line-drawing.png' width={270} height={150} alt="people-line-drawing" className="absolute sm:hidden -top-36 right-0"/>
        <div className="relative flex flex-col sm:flex-row items-center md:justify-between lg:justify-center gap-8">
          <Image src='/menu_drikke.webp' width={350} height={500} alt="people-line-drawing" className="rounded-2xl"/>
          <Image src='/menu_mad.webp' width={350} height={500} alt="people-line-drawing" className="rounded-2xl"/>

        </div>
      </motion.div>

    </section>
  );
};