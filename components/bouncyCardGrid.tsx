'use client'

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./button";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 text-black">
      <div className="mb-12 flex flex-col items-center gap-10">
        <h2 className="text-4xl font-bold md:text-5xl">
          Kontorplads i hyggelige omgivelser 
        </h2>
        <p className="text-slate-700 font-bold max-w-lg">Vi tilbyder kontorpladser til mindre virksomheder og selvstændige i vores nyrenoverede kontorfællesskab</p>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/branch.svg">20+ Iværksættere</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-r from-[#39592c] to-[#608053] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              Bliv en del af et hyggeligt fællesskab
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/cactus.svg">Sociale arrangementer</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-r from-[#39592c] to-[#608053] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              Fællesmorgenmad og andre gode aktiviteter
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/flamingo.svg">Faste pladser</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-r from-[#39592c] to-[#608053] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              Hævesænkebord, kontorstol, internet og bordlampe
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/fox.svg">Adgang 24/7</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-r from-[#39592c] to-[#608053] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              Arbejd når det passer dig
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/snow.svg">Et spændende community</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-r from-[#39592c] to-[#608053] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
                Få og giv sparring med andre virksomheder og selvstændige
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle logoPath="/icons/cactus-2.svg">Møderum</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-r from-[#39592c] to-[#608053] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              13m2 med mødebord, whiteboard, internet og fladsskærms-tv
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="flex justify-center mt-10">
        <Button text="Kontakt" bgcolor="#39592c"/>
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
    <div className="flex">
        <Image src={logoPath} width={50} height={50} alt="feature-logo"/>
        <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
    </div>
  );
};