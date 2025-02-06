'use client'

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { drikkeItems, spiseItems } from "@/data";
import Infocard from "./infocard";

export const KaffeBarGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 text-black">
      <div className="flex relative flex-col gap-8 mt-24">
        <Image src='/line-drawing2.png' width={460} height={200} alt="people-line-drawing" className="absolute hidden sm:block right-16 -top-28 z-10"/>
        <Image src='/line-drawing2.png' width={150} height={120} alt="people-line-drawing" className="absolute sm:hidden left-8 -top-32"/>

        <h2 className="text-5xl font-gothic md:text-7xl max-w-4xl relative">
          Kom indenfor og nyd <span className="text-secondary">en varm kop kaffe</span> 
        </h2>
        <p className="text-black font-sans font-medium max-w-xl">Vi serverer bæredygtig kaffe og bagværk i vores italiensk-inspirerede kaffebar i Sydhavnen. Vi stræber altid efter at skabe en hyggelig og hjemlig stemning, så vores gæster føler sig velkomne og godt tilpas. Inde bagved kaffebaren har vi et kontorfællesskab.</p>
      </div>
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
      className="flex-col flex relative sm:flex-row items-center justify-center gap-24 sm:gap-10 mt-52 mb-[100px] sm:mb-[140px]"
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
        <Image src='/line-drawing.png' width={400} height={300} alt="people-line-drawing" className="absolute hidden sm:block -top-40 -left-20"/>
        <Image src='/line-drawing.png' width={270} height={150} alt="people-line-drawing" className="absolute sm:hidden -top-36 right-0"/>
        <div className="flex flex-col lg:w-2/6 w-full rounded-2xl bg-backgroundSandDark border border-accent relative">
            <div className="bg-secondary text-center border-b border-background2 rounded-t-2xl font-gothic text-5xl p-4 text-white">
              KOLDE OG VARME DRIKKE
            </div>
            <ul className="flex flex-col gap-3 items-center justify-center p-4">
                {drikkeItems.map(({id, classNames, title, price}) => (
                  <li key={id} className={classNames}>
                    <p>{title}</p>
                    <p>{price}</p>
                  </li>
                ))} 
            </ul>
        </div>
        <div className="flex flex-col lg:w-2/6 w-full rounded-2xl bg-backgroundSandDark border border-accent">
            <div className="bg-secondary text-center border-b border-background2 rounded-t-2xl font-gothic text-5xl p-4 text-white">
              MAD OG SNACKS
            </div>
            <ul className="flex flex-col gap-3 items-center justify-center p-4">
                {spiseItems.map(({id, classNames, title, price}) => (
                  <li key={id} className={classNames}>
                    <p>{title}</p>
                    <p>{price}</p>
                  </li>
                ))} 
            </ul>
        </div>
      </motion.div>

    </section>
  );
};