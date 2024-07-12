'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

const IMG_PADDING = 12;

export const TextParallaxContent = ({
    imgPath,
    subheading,
    heading,
    children,
  }: {
    imgPath: string;
    subheading: string;
    heading: string;
    children: ReactNode;
  }) => {


    return (
      <div
        style={{
          paddingLeft: IMG_PADDING,
          paddingRight: IMG_PADDING,
        }}
      >
        <div className="relative h-[150vh]">
          <StickyImage imgPath={imgPath} />
          <OverlayCopy heading={heading} subheading={subheading} />
        </div>
        {children}
      </div>
    );
  };


const StickyImage = ({ imgPath }: { imgPath: string }) => {

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
          backgroundPosition: "center",
          height: `calc(100vh - ${IMG_PADDING * 2}px)`,
          top: IMG_PADDING,
          scale,
        }}
        ref={targetRef}
        className="sticky z-0 overflow-hidden rounded-3xl"
      >
        <motion.div
          className="absolute inset-0 bg-neutral-950/70"
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
  }: {
    subheading: string;
    heading: string;
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
        <p className="mb-2 text-center font-extrabold text-6xl md:mb-4 md:text-9xl">
          {heading}
        </p>
        <p className="text-center text-xl font-normal md:text-4xl">{subheading}</p>
        <div className="flex gap-10 mt-10">
          <button className="w-full rounded-2xl bg-[#DEB8A1] p-4 text-xl text-black transition-colors hover:bg-neutral-700 md:w-fit">
            Kaffebar
          </button>
          <button className="w-full rounded-2xl bg-[#39592c] p-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
            Kontorfællesskab
          </button>
        </div>
      </motion.div>
    );
  };