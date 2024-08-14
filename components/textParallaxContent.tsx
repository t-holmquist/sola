'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
import AnimationLink from "@/utils/animationLink";

const IMG_PADDING = 12;

export const TextParallaxContent = ({
    imgPath,
    subheading,
    heading,
    buttonText,
    buttonColor,
    animationType,
    href,
    children,
    heroImageAlign,
  }: {
    imgPath: string;
    subheading: string;
    heading: string;
    animationType: string;
    buttonColor: string;
    buttonText: string;
    href: string;
    children: ReactNode;
    heroImageAlign: string;
  }) => {


    return (
      <div
        style={{
          paddingLeft: IMG_PADDING,
          paddingRight: IMG_PADDING,
        }}
      >
        <div className="relative h-[100vh]">
          <StickyImage imgPath={imgPath} heroImageAlign={heroImageAlign} />
          <OverlayCopy heading={heading} subheading={subheading} href={href} animationType={animationType} buttonText={buttonText} buttonColor={buttonColor}/>
        </div>
        {children}
      </div>
    );
  };


const StickyImage = ({ imgPath, heroImageAlign }: { imgPath: string, heroImageAlign: string; }) => {
  

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"],
    });
  
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
    return (
      <motion.div
        style={{
          backgroundImage: `url(${imgPath})`,
          backgroundSize: "cover",
          height: `calc(100vh - ${IMG_PADDING * 2}px)`,
          top: IMG_PADDING,
          scale,
        }}
        ref={targetRef}
        className={`relative z-0 overflow-hidden rounded-3xl md:bg-right ${heroImageAlign}`}
      >
        <motion.div
          className="absolute inset-0 bg-black/20"
          style={{
            opacity,
          }}
        />
      </motion.div>
    );
  };


const OverlayCopy = ({
    subheading,
    heading,
    buttonText,
    buttonColor,
    animationType,
    href,
  }: {
    subheading: string;
    heading: string;
    buttonText: string;
    buttonColor: string;
    animationType: string;
    href: string;
  }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
  
    return (
      <motion.div
        style={{
          y,
          opacity,
        }}
        ref={targetRef}
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
        {/* div fixes height of font on large devices */}
        <div className="lg:h-64">
          <h1 className="text-center text-white font-gothic text-9xl md:text-[300px]">
            {heading}
          </h1>
        </div>
        
        <TextGenerateEffect words={subheading} className="text-center text-white text-xl font-sans font-medium md:text-3xl"/>
        <div className="flex gap-10 mt-10">
          <AnimationLink animationType={animationType} href={href} className={`font-sans ${buttonColor} whitespace-nowrap rounded-xl px-4 py-2 font-medium text-white shadow-xl hover:scale-105 transition-all`}>{buttonText}</AnimationLink>
        </div>
      </motion.div>
    );
  };