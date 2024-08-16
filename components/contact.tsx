import ContactForm from "./contactForm";
import Image from "next/image";


export const Contact = () => {
  return (
    <div className="flex relative flex-col items-center gap-8 text-center">
        <Image src='/line-drawing3.png' width={300} height={250} alt="people-line-drawing" className="absolute hidden sm:block -top-[220px]"/>
        <Image src='/line-drawing3.png' width={200} height={250} alt="people-line-drawing" className="absolute -top-[150px] sm:hidden"/>
        <h2 className="text-3xl font-gothic md:text-7xl text-black">KOM FORBI OG FÅ <span className="text-accent">EN KOP KAFFE</span></h2>
        <p className="text-black font-sans font-semibold sm:max-w-lg max-w-80">Eller send os en mail og hør mere om vores faciliteter, området eller vores fremtidige planer for kontorfællesskabet</p>
        <ContactForm />
    </div>
  )
}

export default Contact;