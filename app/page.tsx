import { TextParallaxContent } from "@/components/textParallaxContent";


export default function Home() {
  return (
    <div className="bg-[#f0efd6]">
      <TextParallaxContent
        imgPath="/office.jpg"
        subheading="Kaffebar og kontorfællesskab"
        heading="SOLA"
      >
      <div className="flex flex-col pb-24 pt-12">
        <h2 className="mx-10 text-3xl text-black font-bold md:col-span-4">
          FACILITETER OG PRIS
        </h2>
        <div className="mx-10">
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
            maiores voluptate est ut saepe accusantium maxime doloremque nulla
            consectetur possimus.
          </p>
          <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            reiciendis blanditiis aliquam aut fugit sint.
          </p>
          <button className="w-full rounded-2xl bg-[#af3523] px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
            Læs mere
          </button>
        </div>
      </div>
      </TextParallaxContent>
    </div>
  );
};
