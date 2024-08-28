import Image from "next/image"
import Link from "next/link"

const Footer = ({
    footerColor,
    hasRapportLogo,
}: {
    footerColor: string;
    hasRapportLogo: boolean;
}) => {
  return (
    <div className="mt-12 sm:mt-24">
        <div className={`${footerColor} rounded-t-2xl`}>
            <div className="flex flex-col sm:flex-row items-center justify-between p-6">
                <div className="flex">
                    <Link href='/' className="text-white text-4xl sm:text-3xl font-gothic">SOLA</Link>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-5 mt-[20px] sm:mt-0">
                    <div className="flex gap-2">
                        <Image src="/icons/home.svg" width={15} height={15} alt="address"/>
                        <Link href='https://maps.app.goo.gl/XxDL68K5vBXtkUu98' className="text-white font-sans sm:text-[12px]">Johan Kellers Vej 1, 2450 København</Link>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/icons/phone.svg" width={15} height={15} alt="address"/>
                        <Link href={`tel:${28576843}`} className="text-white font-sans sm:text-[12px]">+45 28 57 68 43</Link>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/icons/email.svg" width={15} height={15} alt="address"/>
                        <Link href='mailto:kontakt@solacph.dk' className="text-white font-sans sm:text-[12px]">kontakt@solacph.dk</Link>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/icons/cvr.svg" width={15} height={15} alt="cvr"/>
                        <p className="text-white font-sans sm:text-[12px]">CVR: 44664526</p>
                    </div>
                    {hasRapportLogo && (
                    <Link href="https://www.findsmiley.dk/1449105">
                        <Image src="/icons/rapport.gif" width={70} height={30} alt="fodevarestyrelsen"/>
                    </Link>
                    )}
                    <div className="flex gap-2">
                        <Link href="https://www.instagram.com/solacph">
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