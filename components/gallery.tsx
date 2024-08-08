import Image from "next/image";

const Gallery = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-32 mb-40 sm:mb-72 px-5 sm:gap-0 gap-6">
        <Image
        src='/Hero-kontor.webp'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl"
        />
        <Image
        src='/Hero-kontor.webp'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl sm:hidden"
        />
    </div>
  )
}

export default Gallery;