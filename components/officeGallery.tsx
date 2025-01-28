import Image from "next/image";


export const OfficeGallery = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-20">
            <div className="col-span-6 border">
                <Image src={"/kontor2.webp"} width={800} height={800} alt="kontor" className="rounded-2xl border border-accent aspect-video object-cover" />
            </div>
            <div className="col-span-6">
                <Image src={"/kontor3.webp"} width={800} height={800} alt="kontor" className="rounded-2xl border border-accent aspect-video object-cover" />
            </div>
        </section>
    );
}

export default OfficeGallery;