import Image from "next/image";


export const OfficeGallery = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-20 items-end">
            <div className="col-span-6">
                <Image src={"/kontor2.webp"} width={800} height={600} alt="kontor" className="rounded-2xl border border-accent aspect-video object-cover w-full" />
            </div>
            <div className="col-span-6">
                <Image src={"/kontor3_16x9.webp"} width={960} height={540} alt="kontor" className="rounded-2xl border border-accent aspect-video object-cover w-full" />
            </div>
        </section>
    );
}

export default OfficeGallery;