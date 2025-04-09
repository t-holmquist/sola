'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


export const BaristaSection = () => {


    const list = {
        hidden: {},
        visible: {}
    }

    const item = {
        hidden: { opacity: 0, y: 20},
        visible: { opacity: 1, y: 0}
    }


    return (
        <section className="grid grid-cols-1 xl:grid-cols-12 lg:items-center gap-14 md:gap-24">
            <motion.div className="flex flex-col lg:col-span-6 gap-10"
            variants={list}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.5, once: true}}
                transition={{
                    staggerChildren: 0.3,
            }}
            >
                <motion.h2 className="font-gothic font-bold text-5xl md:text-6xl"
                variants={item}
                >Lær kunsten ved <span className="text-accent">espressobrygning</span></motion.h2>
                <motion.p className="font-sans font-medium max-w-3xl"
                variants={item}
                >Kom med til en hyggelig og lærerig eftermiddag i kaffens tegn, når vi inviterer til baristakursus i kaffebaren SOLA! Kurset ledes af den passionerede barista Mikkel Rendal, som er uddannet i Barcelona og har en skarp sans for detaljen i hver eneste kop.</motion.p>
                <motion.div className="flex gap-2"
                variants={item}
                >
                    <div>
                        <p className="font-sans font-medium max-w-3xl"><span className="font-bold">Grundig introduktion. </span>I løbet af to timer får du introduktion til espressobrygning, mælkeskumning og de vigtigste teknikker bag en god kaffeoplevelse – både for begyndere og nysgerrige kaffeelskere.</p>
                    </div>
                </motion.div>
                <motion.div className="flex gap-2"
                variants={item}
                >
                    <div>
                        <p className="font-sans font-medium max-w-3xl"><span className="font-bold">Gratis espressobønner. </span>Som deltager får du en pose espressobønner med hjem, så du kan fortsætte træningen på din egen maskine.</p>
                    </div>
                </motion.div>
                <motion.div className="border border-accent bg-backgroundSandDark rounded-2xl px-8 py-6 space-y-3"
                variants={item}
                >
                    <h3 id="tilmeld" className="font-gothic text-3xl">Tilmelding</h3>
                    <p className="font-sans font-medium">Du kan tilmelde dig ved at skrive til kursusleder, Mikkel, på <Link href='mailto:mikkelrendal@gmail.com' className="bg-accent px-2 text-white rounded-lg hover:bg-accent2">mikkelrendal@gmail.com</Link> og derefter overføre kursusprisen på 500,- til SOLA på MobilePay: 28986</p>
                    <p className="font-sans font-bold">Næste kursus er mandag d. 1. maj.</p>
                    <p className="font-sans font-medium">Vi glæder os til at dele kaffeglæden med dig hos SOLA!</p>
                </motion.div>

            </motion.div>
            <div className="lg:col-span-6 space-y-2 relative">
                <Image src={"/barista.webp"} width={700} height={700} alt="barista" className="rounded-xl"/>
                <p className="absolute bottom-0 text-white px-3 py-1 font-sans font-bold md:text-xl">Mikkel Rendal <br /><span className="font-medium font-sans">Professionel Barista</span></p>
            </div>
        </section>
    );
}

export default BaristaSection;