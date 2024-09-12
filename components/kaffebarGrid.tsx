'use client'

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { drikkeItems, spiseItems } from "@/data";

export const KaffeBarGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 mt-[60px] sm:mt-[80px] text-black">
      <div className="flex relative flex-col items-center text-center gap-8 mt-[150px] sm:mt-[240px]">
        <Image src='/line-drawing2.png' width={460} height={200} alt="people-line-drawing" className="absolute z-10 hidden sm:block -left-16 -top-44"/>
        <Image src='/line-drawing2.png' width={150} height={120} alt="people-line-drawing" className="absolute sm:hidden left-8 -top-32"/>

        <h2 className="text-5xl font-gothic md:text-7xl max-w-4xl">
          KOM INDENFOR OG NYD <span className="text-secondary">EN VARM KAFFE</span> 
        </h2>
        <p className="mb-20 text-black font-sans font-semibold max-w-lg">Vi serverer bæredygtig kaffe og bagværk i vores italiensk-inspirerede kaffebar i Sydhavnen</p>
      </div>
      <motion.div 
      className="grid grid-cols-12 gap-8 sm:gap-4 sm:mt-28"
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
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>ÅBNINGSTIDER</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-secondary p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white text-sm sm:text-base">
                Vi har åbent onsdag-søndag fra 8-15
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>ADRESSEN</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-secondary p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white text-sm sm:text-base">
                Johan Kellers Vej 1, 2450 København SV
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>MENUEN</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-secondary p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white text-sm sm:text-base">
                God kaffe, bagværk og andre lækre sager i italiensk-inspirerede omgivelser
              </span>
            </div>
          </div>
        </BounceCard>
      </motion.div>
      {/* Menu gallery */}
      <motion.div 
      className="flex-col flex relative sm:flex-row items-center justify-center gap-24 sm:gap-10 mt-52 sm:mt-72 mb-[100px] sm:mb-[140px]"
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
        <Image src='/line-drawing.png' width={500} height={300} alt="people-line-drawing" className="absolute hidden sm:block -top-56 -right-14"/>
        <Image src='/line-drawing.png' width={270} height={150} alt="people-line-drawing" className="absolute sm:hidden -top-36 right-0"/>
        <div className="flex flex-col md:w-2/6 w-full rounded-2xl bg-background2">
            <div className="bg-accent text-center border-b border-background2 rounded-t-2xl font-gothic text-5xl p-4 text-white">
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
        <div className="flex flex-col md:w-2/6 w-full rounded-2xl bg-background2">
            <div className="bg-accent text-center border-b border-background2 rounded-t-2xl font-gothic text-5xl p-4 text-white">
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
        
        
        
        
        
        {/* <Image
        src='/menu-drikke.webp'
        width={450}
        height={850}
        alt="menu"
        className="rounded-2xl"
        />
        <Image
        src='/menu-spise.webp'
        width={450}
        height={850}
        alt="menu"
        className="rounded-2xl"
        /> */}
      </motion.div>

    </section>
  );
};

const BounceCard = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[240px] overflow-hidden rounded-2xl bg-background2 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children, logoPath }: { children: ReactNode, logoPath?: string }) => {
  return (
    <div className="flex items-center justify-center gap-2">
        {logoPath && (
          <Image src={logoPath} width={50} height={50} alt="feature-logo"/>
        )}
        <h3 className="text-5xl font-gothic">{children}</h3>
    </div>
  );
};