import ContactForm from "./contactForm";
import Image from "next/image";


export const Contact = () => {
  return (
    <div className="flex relative flex-col items-center mt-28 lg:mt-0 gap-8">
      <div className="flex flex-col gap-8">
        <Image src='/line-drawing.png' width={400} height={250} alt="people-line-drawing" className="absolute hidden lg:block -top-20 -left-0"/>
        <Image src='/line-drawing.png' width={200} height={250} alt="people-line-drawing" className="absolute -top-[150px] lg:hidden"/>
        <div className="flex flex-col gap-3 p-4 border-accent border bg-backgroundSandDark rounded-2xl ">
          <h2 className="text-5xl md:text-6xl font-gothic text-black">Pris på kontorplads</h2>
          <p className="font-sans font-bold text-accent">2200 kr. ex moms</p>
          <p className="text-black font-sans sm:max-w-lg max-w-80">Kom forbi og få en kop kaffe, eller send os en mail og hør mere om vores faciliteter, området eller vores fremtidige planer for kontorfællesskabet.</p>
        </div>
        <ContactForm />
      </div>
      
    </div>
  )
}

export default Contact;