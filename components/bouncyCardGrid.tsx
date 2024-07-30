'use client'

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 mt-20 text-black">
      <div className="mb-12 flex flex-col items-center text-center gap-8">
        <h2 className="text-5xl font-gothic md:text-7xl max-w-4xl">
          KONTORPLADSER I <span className="text-[#39592c]">HYGGELIGE OMGIVELSER</span> 
        </h2>
        <p className="mb-20 text-black font-sans max-w-lg">Vi tilbyder kontorpladser til mindre virksomheder og selvstændige i vores nyrenoverede kontorfællesskab i Sydhavn</p>
      </div>
      <div className="mb-10 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/branch.svg">SPÆNDENDE COMMUNITY</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white">
                Få og giv sparring med andre virksomheder og selvstændige
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/leaves.svg">ÅBENT 24/7</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white">
                Kontoret er altid åbent - 24/7 365 dage om året. Det er sku da optur!
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/bush.svg">GOD BELIGGENHED</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <div className="flex justify-center">
                <ul className="font-sans text-white list-disc">
                  <li className="text-white font-normal">Tæt på livlige og grønne Bavnehøj Allé.</li>
                  <li className="text-white font-normal">Bus, s-tog og motorvejsarkørsel</li>
                  <li className="text-white font-normal">BaneGaarden og Carlsberg Byen</li>
                  <li className="text-white font-normal">Gode spisesteder</li>
                </ul>
              </div>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/leaves-2.svg">RUMMELIGT KONTOR</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <ul className="font-sans text-white list-disc">
                <li className="text-white font-normal">50 kvm kontor med højt til loftet!</li>
                <li className="text-white font-normal">1000/1000 internet og print</li>
                <li className="text-white font-normal">Gratis kaffe og te</li>
                <li className="text-white font-normal">Hyggelig, grøn baggård</li>
              </ul>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/tree.svg">KAFFEBAR</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white">
                  Du kan få god kaffe, bagværk og andre lækre sager, samt rabatordning i vores kaffebar
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/cactus-2.svg">MØDELOKALE</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white">
                Rummeligt mødelokale med fladskærm og whiteboard til præsentationer
              </span>
            </div>
          </div>
        </BounceCard>
      </div>
      
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
      className={`group relative min-h-[240px] overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children, logoPath }: { children: ReactNode, logoPath: string }) => {
  return (
    <div className="flex items-center justify-center gap-2">
        <Image src={logoPath} width={50} height={50} alt="feature-logo"/>
        <h3 className="text-4xl font-gothic">{children}</h3>
    </div>
  );
};