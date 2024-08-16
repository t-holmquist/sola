import Image from "next/image";

const KaffebarGallery = () => {
  return (
    <div className="grid grid-cols-12 gap-8 sm:gap-12 px-5 sm:px-32 sm:mt-[140px] mb-[120px] sm:mb-[200px]">
        <Image
        src='/kaffebar2.webp'
        width={960}
        height={540}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-6"
        />
        <Image
        src='/kaffebar1.webp'
        width={960}
        height={540}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-6"
        />
        <Image
        src='/kaffebar4.webp'
        width={960}
        height={540}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-6"
        />
        <Image
        src='/kaffebar3.webp'
        width={960}
        height={540}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-6"
        />
        
    </div>
  )
}

export default KaffebarGallery;