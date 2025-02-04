'use client';

import Image from "next/image";
import ImageChanger from "./imageChanger";
import { motion } from "framer-motion";


export const Floorplan = () => {


    const list = {
        hidden: {},
        visible: {}
    }

    const item = {
        hidden: { opacity: 0, y: 20},
        visible: { opacity: 1, y: 0}
    }


    return (
        <section className="grid grid-cols-1 xl:grid-cols-12 lg:items-end gap-14 md:gap-24">
            <motion.div className="flex flex-col lg:col-span-6 gap-10"
            variants={list}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.5, once: true}}
                transition={{
                    staggerChildren: 0.3,
            }}
            >
                <Image src={"/illustrations/solakontor.webp"} width={550} height={550} alt="SOLA" className="aspect-video object-cover"/>
                <motion.h2 className="font-gothic font-bold text-5xl md:text-6xl"
                variants={item}
                >Sådan kan dit <span className="text-accent">kommende kontor se ud</span></motion.h2>
                <motion.p className="font-sans font-medium max-w-3xl"
                variants={item}
                >Kontorfælleskabet er fordelt på to planer. Vi har 10 pladser i alt og har alle faciliteter, der forventes af et anstændigt kontor.</motion.p>
                <motion.div className="flex gap-2"
                variants={item}
                >
                    <div className="mt-1.5">
                        <Image src={"/icons/building-solid.svg"} width={35} height={35} alt="SOLA"/>
                    </div>
                    <div>
                        <p className="font-sans font-medium max-w-3xl"><span className="font-bold">Rummeligt kontor med mødelokale. </span>Kontoret er ca. 50 kvm, udrustet med hurtigt internet (1000/1000) og har mødelokale med fladskærm og whiteboard.</p>
                    </div>
                </motion.div>
                <motion.div className="flex gap-2 sm:gap-1"
                variants={item}
                >
                    <div className="mt-1.5">
                        <Image src={"/icons/clock-solid.svg"} width={30} height={30} alt="SOLA"/>
                    </div>
                    <div>
                        <p className="font-sans font-medium max-w-3xl"><span className="font-bold">God beliggenhed og åbent 24/7. </span>Vi ligger blot et stenkast fra motorvejsafkørsel, s-tog, bus og hyggelige grønne områder.</p>
                    </div>
                </motion.div>
            </motion.div>
            <div className="lg:col-span-6">
                <ImageChanger />
            </div>
        </section>
    );
}

export default Floorplan;