import Image from "next/image";

const Gallery = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-32 mb-40 sm:mb-60 px-5 sm:gap-0 gap-6">
        <Image
        src='/office-wide.jpg'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl"
        />
        <Image
        src='/office2.jpg'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl sm:hidden"
        />
    </div>
  )
}

export default Gallery;