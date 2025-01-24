import Image from "next/image";
import { Button } from "./ui/button";


export const Community = () => {
    return (
        <section id="community" className="grid grid-col-1 lg:grid-cols-12 gap-8 justify-between">
            <div className="col-span-6 justify-end">
                <div className="flex flex-col gap-6">
                    <h2 className="text-6xl font-bold font-gothic">Bliv en del af et <span className="text-accent">voksende community</span></h2>
                    <p className="font-sans">SOLA er en kaffebar og et kontorfællesskab slået sammen. Idéen stammer fra det amerikanske “coffice”, hvor kaffen er et så vigtigt omdrejningspunkt, at man har professionelle baristaer knyttet til kontoret. </p>
                    <Button 
                    text="Få en rundvisning"
                    link="#contact"
                    className="bg-primary text-white"
                    />
                    <div className="relative mt-10">
                        <Image src={"/kontor.webp"} width={600} height={300} alt="office" className="rounded-2xl min-w-full border border-accent"/>
                        <Image src={"/illustrations/coffee.webp"} width={200} height={150} alt="office" className="absolute -top-40 right-0"/>
                    </div>
                </div>
            </div>
            <div className="col-span-6">
                <Image src={"/kontor2.webp"} width={800} height={300} alt="office" className="rounded-2xl min-h-full object-cover border border-accent"/>
            </div>
        </section>
    );
}

export default Community;