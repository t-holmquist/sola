'use client';

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";


export const Community = () => {

    const list = {
        hidden: {},
        visible: {}
    }

    const item = {
        hidden: { opacity: 0, y: 20},
        visible: { opacity: 1, y: 0}
    }


    return (
        <section id="community" className="grid grid-col-1 lg:grid-cols-12 gap-8 items-end">
            <div className="col-span-6">
                <motion.div className="flex flex-col gap-6"
                variants={list}
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.3, once: true}}
                transition={{
                    staggerChildren: 0.3,
                }}
                >
                    <motion.h2 className="text-5xl md:text-6xl font-bold font-gothic"
                    variants={item}
                    >Bliv en del af et <span className="text-accent">voksende community</span></motion.h2>
                    <motion.p className="font-sans max-w-lg font-medium"
                    variants={item}
                    >SOLA er en kaffebar og kontorfælllesskab slået sammen. Hos SOLA sidder i øjeblikket folk indenfor reklamebranchen, journalistik, regnskab og tech. 
                    Der er ikke branchespecificitet i SOLA, hvorfor der er plads til alt fra kreative erhverv til bogholdere. Fællesskabet er omdrejningspunktet både i kontoret og i kaffebaren.</motion.p>
                    <motion.div
                    variants={item}
                    >
                    <Button 
                    text="Få en rundvisning"
                    link="#contact"
                    className="bg-primary text-white"
                    />
                    </motion.div>
                    <div className="relative mt-10">
                        <Image src={"/illustrations/coffee.webp"} width={200} height={150} alt="office" className="absolute -top-36 right-0 animate-illustrationUP"/>
                        <Image src={"/kontor.webp"} width={900} height={600} alt="office" className="rounded-2xl min-w-full border border-accent z-40 relative"/>
                    </div>
                </motion.div>
            </div>
            <div className="col-span-6"
            >
                <Image src={"/kontor2_4x5.webp"} width={1080} height={1350} alt="office" className="rounded-2xl w-full border border-accent"/>
            </div>
        </section>
    );
}

export default Community;