import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="mt-24">
        <div className="bg-primary rounded-t-2xl">
            <div className="flex items-center justify-between p-6">
                <div className="flex">
                    <p className="text-white text-3xl font-gothic">SOLA</p>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex gap-2">
                        <Image src="/icons/home.svg" width={15} height={15} alt="address"/>
                        <p className="text-white font-sans text-[12px]">Johan Kellers Vej 1, 2450 København</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/icons/phone.svg" width={15} height={15} alt="address"/>
                        <p className="text-white font-sans text-[12px]">28 57 68 43</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/icons/email.svg" width={15} height={15} alt="address"/>
                        <p className="text-white font-sans text-[12px]">kontakt@sola.dk</p>
                    </div>
                    <div className="flex gap-2">
                        <Link href="/">
                            <Image src="/icons/instagram.svg" width={32} height={32} alt="address" className="bg-secondary p-2 rounded-full"/>
                        </Link>
                    </div>
                </div>  
            </div>    
        </div>
    </div>
  )
}

export default Footer