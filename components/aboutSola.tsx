'use client';

import { motion } from "framer-motion";
import Image from "next/image";


export const AboutSola = () => {

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
                <motion.div className="flex flex-col gap-8"
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
                    >Fra tom brun bodega til <span className="text-accent">levende kaffebar og kontorfællesskab</span></motion.h2>
                    <motion.p className="font-sans max-w-lg font-medium"
                    variants={item}
                    >SOLA er stiftet af vennerne Emil og Jannik, der til daglig selv sidder i kontorfællesskabet. 
                        SOLA er bygget i de gamle lokaler fra den legendariske beverding Café Kiki. Meget af Café Kiki lever videre i SOLA, selvom restaureringen var ganske gennemgribende. 
                        Idéen med SOLA-konceptet stammer fra det amerikanske “coffice”, hvor kaffen er et så vigtigt omdrejningspunkt, at man har professionelle baristaer knyttet til kontoret.</motion.p>
                    <div className="relative mt-16 sm:mt-10">
                        <Image src={"/illustrations/krydsogtvaers.webp"} width={160} height={150} alt="office" className="absolute -top-28 -right-4 sm:hidden"/>
                        <Image src={"/illustrations/krydsogtvaers.webp"} width={220} height={150} alt="office" className="absolute -top-36 -right-8 sm:block hidden"/>
                        <Image src={"/emil_jannik.webp"} width={960} height={540} alt="office" className="rounded-2xl min-w-full border border-accent z-40 relative"/>
                        <div className="absolute -top-4 sm:-top-4 left-6 z-50 p-1 sm:p-2 border border-accent bg-backgroundSandDark rounded-2xl">
                            <p className="font-sans font-bold sm:text-normal text-xs">Emil og Jannik står bag SOLA</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="col-span-6">
                <Image src={"/brunbodega.webp"} width={900} height={1440} alt="office" className="rounded-2xl border border-accent aspect-[4/5] object-cover object-bottom w-full"/>
            </div>
        </section>
    );
}

export default AboutSola;