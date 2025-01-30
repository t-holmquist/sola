'use client';


import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";


export const ImageChanger = () => {

    const [currentImage, setCurrentImage] = useState("/oevreplan.webp");

    

    return (
        <section 
        key={currentImage}
        className="flex flex-col gap-8 items-center">
            <div className="flex gap-4">
                <button onClick={() => {setCurrentImage("/oevreplan.webp")}} className={`${currentImage == "/oevreplan.webp" ? "bg-accent text-white" : "border border-accent text-black"}  px-4 py-2 rounded-xl sm:hover:scale-105 sm:transition-all`}>Øvre plan</button>
                <button onClick={() => {setCurrentImage("/nedreplan.webp")}} className={`${currentImage == "/nedreplan.webp" ? "bg-accent text-white" : "border border-accent text-black"}  px-4 py-2 rounded-xl sm:hover:scale-105 sm:transition-all`}>Nedre plan</button>
            </div>
            <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{
                once: true
              }}
            >
                <Image
                    src={currentImage}
                    alt="Floorplan"
                    width={600}
                    height={600}
                    className="rounded-2xl"
                />
            </motion.div>
        </section>
    );
}

export default ImageChanger;