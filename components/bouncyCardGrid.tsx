'use client'

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 text-black">
      <div className="flex flex-col items-center text-center gap-10">
        <h2 className="text-5xl font-gothic md:text-7xl max-w-4xl">
          KONTORPLADSER I <span className="text-[#39592c]">HYGGELIGE OMGIVELSER</span> 
        </h2>
        <p className="text-black font-sans font-semibold max-w-xl">Vi tilbyder kontorpladser i vores nye kontorfællesskab i Sydhavnen</p>
      </div>
      <motion.div 
      className="mt-[80px] mb-10 grid grid-cols-12 gap-8 sm:gap-4"
      initial={{
        x:40,
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
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>RUMMELIGT KONTOR</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 sm:top-20 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <ul className="font-sans text-white">
                <li className="text-white font-normal text-center text-sm sm:text-base">50 kvm kontor med højt til loftet!</li>
                <li className="text-white font-normal text-center text-sm sm:text-base">1000/1000 internet og print</li>
                <li className="text-white font-normal text-center text-sm sm:text-base">Gratis kaffe fra ØNSK</li>
                <li className="text-white font-normal text-center text-sm sm:text-base">Hyggelig, grøn baggård</li>
              </ul>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>ÅBENT 24/7</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white text-sm sm:text-base">
                Kontoret er altid åbent - 24/7, 365
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>GOD BELIGGENHED</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 sm:top-20 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <div className="flex justify-center">
                <ul className="font-sans text-white"> 
                    <li className="text-white font-normal text-center text-sm sm:text-base">Tæt på livlige og grønne Bavnehøj Allé</li>
                    <li className="text-white font-normal text-center text-sm sm:text-base">Tæt på bus, s-tog og motorvejsafkørsel</li>
                    <li className="text-white font-normal text-center text-sm sm:text-base">Tæt på BaneGaarden og Carlsberg Byen</li>
                    <li className="text-white font-normal text-center text-sm sm:text-base">Tæt på gode spisesteder</li>
                </ul>
              </div>
          </div>
        </BounceCard>
      </motion.div>
      <motion.div 
      className="grid grid-cols-12 gap-8 sm:gap-4"
      initial={{
        x:40,
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
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>KAFFEBAR</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white text-sm sm:text-base">
                  Du kan få god kaffe, bagværk og andre lækre sager med rabatordning
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>MØDELOKALE</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white text-sm sm:text-base">
                Rummeligt mødelokale med fladskærm og whiteboard til præsentationer
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>SPÆNDENDE COMMUNITY</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white text-sm sm:text-base">
                Få og giv sparring med andre virksomheder og selvstændige
              </span>
            </div>
          </div>
        </BounceCard>
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
    <div className="flex items-center justify-center gap-2 text-center">
        {logoPath && (
          <Image src={logoPath} width={50} height={50} alt="feature-logo"/>
        )}
        <h3 className="text-5xl font-gothic">{children}</h3>
    </div>
  );
};