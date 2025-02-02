import Image from "next/image";
import { Button } from "./ui/button";


export const Community = () => {
    return (
        <section id="community" className="grid grid-col-1 lg:grid-cols-12 gap-8 items-end">
            <div className="col-span-6">
                <div className="flex flex-col gap-6">
                    <h2 className="text-5xl md:text-6xl font-bold font-gothic">Bliv en del af et <span className="text-accent">voksende community</span></h2>
                    <p className="font-sans max-w-lg font-medium">SOLA er en kaffebar og kontorfælllesskab slået sammen. Hos SOLA sidder i øjeblikket folk indenfor reklamebranchen, journalistik, regnskab og tech. 
                    Der er ikke branchespecificitet i SOLA, hvorfor der er plads til alt fra kreative erhverv til bogholdere. Fællesskabet er omdrejningspunktet både i kontoret og i kaffebaren.</p>
                    <Button 
                    text="Få en rundvisning"
                    link="#contact"
                    className="bg-primary text-white"
                    />
                    <div className="relative mt-10">
                        <Image src={"/illustrations/coffee.webp"} width={200} height={150} alt="office" className="absolute -top-36 right-0 animate-illustrationUP"/>
                        <Image src={"/kontor.webp"} width={900} height={600} alt="office" className="rounded-2xl min-w-full border border-accent z-40 relative"/>
                    </div>
                </div>
            </div>
            <div className="col-span-6">
                <Image src={"/kontor2_4x5.webp"} width={1080} height={1350} alt="office" className="rounded-2xl w-full border border-accent"/>
            </div>
        </section>
    );
}

export default Community;