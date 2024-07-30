'use client'

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 mt-20 text-black">
      <div className="mb-12 flex flex-col items-center text-center gap-12">
        <h2 className="text-3xl font-bold md:text-7xl max-w-3xl">
          Kontorpladser i <span className="text-[#39592c]">hyggelige omgivelser</span> 
        </h2>
        <p className="mb-20 text-black font-sans max-w-lg">Vi tilbyder kontorpladser til mindre virksomheder og selvstændige i vores nyrenoverede kontorfællesskab i Sydhavn</p>
      </div>
      <div className="mb-10 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/branch.svg">20+ Iværksættere</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-bold text-white">
              Bliv en del af et hyggeligt fællesskab
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/leaves.svg">Sociale arrangementer</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-white">
              Fællesmorgenmad og andre gode aktiviteter
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/bush.svg">Faste pladser</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-white">
              Hævesænkebord, kontorstol, internet og bordlampe
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/leaves-2.svg">Adgang 24/7</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-white">
              Arbejd når det passer dig
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/tree.svg">Spændende community</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-white">
                Få og giv sparring med andre virksomheder og selvstændige
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/cactus-2.svg">Mødelokale</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#39592c] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-white">
              13m2 med bord, whiteboard, internet og fladskærms-tv
            </span>
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
        <h3 className="text-2xl font-semibold">{children}</h3>
    </div>
  );
};