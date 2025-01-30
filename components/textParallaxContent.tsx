'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
import AnimationLink from "@/utils/animationLink";
import { Button } from "./ui/button";

const IMG_PADDING = 12;

export const TextParallaxContent = ({
    imgPath,
    subheading,
    heading,
    buttonText,
    buttonColor,
    animationType,
    hasSecondButton,
    href,
    children,
    heroImageAlign,
  }: {
    imgPath: string;
    subheading: string;
    heading: string;
    animationType: string;
    hasSecondButton: boolean;
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
          <OverlayCopy heading={heading} subheading={subheading} href={href} animationType={animationType} buttonText={buttonText} buttonColor={buttonColor} hasSecondButton={hasSecondButton}/>
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
    // Reminder: First 60% scroll y is 100% opacity, then from 60-80% opacity interpolates from 1 to 0%
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
    hasSecondButton,
    animationType,
    href,
  }: {
    subheading: string;
    heading: string;
    buttonText: string;
    buttonColor: string;
    hasSecondButton: boolean;
    animationType: string;
    href: string;
  }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const opacity = useTransform(scrollYProgress, [0.20, 0.80], [1, 0]);
  
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
          <motion.h1 
          className="text-center text-white font-gothic text-9xl md:text-[300px]"
          initial={{
            x: -10,
            opacity:0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          >
            {heading}
          </motion.h1>
        </div>
        
        <TextGenerateEffect words={subheading} className="text-center text-white font-sans font-medium"/>
        <div className="flex gap-6 mt-10">
          {hasSecondButton && (
            <Button
            text="Se kontor"
            link="#community"
            className="bg-primary"
            />
          )}
          <AnimationLink animationType={animationType} href={href} className={`font-sans ${buttonColor} whitespace-nowrap rounded-xl px-4 py-2 font-normal text-white shadow-xl hover:scale-105 transition-all`}>{buttonText}</AnimationLink>
        </div>
      </motion.div>
    );
  };