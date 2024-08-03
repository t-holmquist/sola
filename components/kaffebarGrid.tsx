'use client'

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const KaffeBarGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 mt-[60px] sm:mt-[80px] text-black">
      <div className="grid grid-cols-12 gap-8 sm:gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>VI LIGGER I SYDHAVN</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-secondary p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white">
                Johan Kellers Vej 1, 2450 København
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>ÅBNINGSTIDER</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-secondary p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white">
                Vi har åbent mandag-fredag fra 8-16
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>DET SERVERER VI</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-secondary p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex justify-center">
              <span className="block text-center font-sans text-white">
                God kaffe, bagværk og andre lækre sager i italiensk-inspirerede omgivelser
              </span>
            </div>
          </div>
        </BounceCard>
      </div>
      <div className="flex relative flex-col items-center text-center gap-8 mt-[200px] sm:mt-[240px]">
        <Image src='/line-drawing2.png' width={320} height={200} alt="people-line-drawing" className="absolute hidden sm:block -left-16 -top-28"/>
        <Image src='/line-drawing2.png' width={150} height={120} alt="people-line-drawing" className="absolute sm:hidden left-8 -top-32"/>

        <h2 className="text-5xl font-gothic md:text-7xl max-w-4xl">
          KOM INDENFOR OG NYD <span className="text-secondary">LÆKKER KAFFE</span> 
        </h2>
        <p className="mb-20 text-black font-sans max-w-lg">Hos SOLA mærker du straks den gode stemning i vores italiensk-inspirede kaffebar</p>
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