import Image from "next/image";

const KaffebarGallery = () => {
  return (
    <div className="grid grid-cols-12 gap-4 px-20">
        <Image
        src='/office6.jpg'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-4"
        />
        <Image
        src='/office3.jpg'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-4"
        />
        <Image
        src='/office4.jpg'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-4"
        />
        <Image
        src='/office5.jpg'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-4"
        />
        <Image
        src='/office6.jpg'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-4"
        />
        <Image
        src='/office1.jpg'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl col-span-12 md:col-span-4"
        />
        
    </div>
  )
}

export default KaffebarGallery;