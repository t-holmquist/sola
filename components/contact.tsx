import ContactForm from "./contactForm";
import Image from "next/image";


export const Contact = () => {
  return (
    <div className="flex relative flex-col items-center gap-8">
      <div className="flex flex-col gap-8">
        <Image src='/line-drawing.png' width={450} height={250} alt="people-line-drawing" className="absolute hidden lg:block -top-20 left-10 z-10"/>
        <Image src='/line-drawing.png' width={250} height={250} alt="people-line-drawing" className="absolute -top-[150px] lg:hidden z-10"/>
        <div className="flex flex-col gap-3 p-4 border-accent border bg-backgroundSandDark rounded-2xl relative z-20">
          <h2 className="text-5xl md:text-6xl font-gothic text-black">Pris på kontorplads</h2>
          <p className="font-sans font-bold text-2xl text-accent">2200 kr. ex moms</p>
          <p className="text-black font-sans font-medium sm:max-w-lg max-w-80">Kom forbi og få en kop kaffe, eller send os en mail og hør mere om vores faciliteter, området eller vores fremtidige planer for kontorfællesskabet.</p>
        </div>
        <ContactForm />
      </div>

    </div>
  )
}

export default Contact;