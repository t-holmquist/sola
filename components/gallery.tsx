import Image from "next/image";

const Gallery = () => {
  return (
    <div className="flex justify-center mt-32 mb-72 px-5">
        <Image
        src='/office-wide.jpg'
        width={1220}
        height={800}
        alt="community"
        className="rounded-2xl"
        />
    </div>
  )
}

export default Gallery;