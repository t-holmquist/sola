import Image from "next/image";


export const AboutSola = () => {
    return (
        <section id="community" className="grid grid-col-1 lg:grid-cols-12 gap-8 items-end">
            <div className="col-span-6">
                <div className="flex flex-col gap-8">
                    <h2 className="text-5xl md:text-6xl font-bold font-gothic">Fra tom brun bodega til <span className="text-accent">levende kaffebar og kontorfællesskab</span></h2>
                    <p className="font-sans max-w-lg font-medium">SOLA er stiftet af vennerne Emil og Jannik, der til daglig selv sidder i kontorfællesskabet. SOLA er bygget i de gamle lokaler fra den legendariske beverding Café Kiki. Meget af Café Kiki lever videre i SOLA, selvom restaureringen var ganske gennemgribende.</p>
                    <div className="relative mt-16 sm:mt-10">
                        <Image src={"/illustrations/krydsogtvaers.webp"} width={160} height={150} alt="office" className="absolute -top-28 -right-4 sm:hidden animate-illustrationUP"/>
                        <Image src={"/illustrations/krydsogtvaers.webp"} width={220} height={150} alt="office" className="absolute -top-36 -right-4 sm:block hidden animate-illustrationUP"/>
                        <Image src={"/emil-jannik.webp"} width={900} height={600} alt="office" className="rounded-2xl min-w-full border border-accent z-40 relative"/>
                        <div className="absolute -top-4 sm:-top-8 left-8 z-50 p-2 sm:p-4 border border-accent bg-backgroundSandDark rounded-2xl">
                            <p className="font-sans font-bold sm:text-normal text-xs">Emil og Jannik står bag SOLA</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-6">
                <Image src={"/brunbodega.webp"} width={500} height={500} alt="office" className="rounded-2xl border border-accent aspect-[4/5] object-cover object-bottom w-full"/>
            </div>
        </section>
    );
}

export default AboutSola;