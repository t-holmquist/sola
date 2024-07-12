'use client'

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollContent = () => {
  return (
    <div className="bg-slate-300">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-71%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#f0efd6]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[700px] w-[700px] rounded-2xl overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default HorizontalScrollContent;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/office1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/office2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/office5.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/office3.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/office4.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/office.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/office6.jpg",
    title: "Title 7",
    id: 7,
  },
];