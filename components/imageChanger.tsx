'use client';


import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";


export const ImageChanger = () => {

    const [currentImage, setCurrentImage] = useState("/øvreplan.webp");

    

    return (
        <section 
        key={currentImage}
        className="flex flex-col gap-8 items-center">
            <div className="flex gap-4">
                <button onClick={() => {setCurrentImage("/øvreplan.webp")}} className={`${currentImage == "/øvreplan.webp" ? "bg-accent text-white" : "border border-accent text-black"}  px-4 py-2 cursor-default`}>Øvre plan</button>
                {/* <button onClick={() => {setCurrentImage("/menu-drikke.webp")}} className={`${currentImage == "/menu-drikke.webp" ? "bg-accent text-white" : "border border-accent text-black"}  px-4 py-2 rounded-xl sm:hover:scale-105 sm:transition-all`}>Nedre plan</button> */}
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