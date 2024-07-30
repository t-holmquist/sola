import { Button } from "./ui/button"

export const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
        <h2 className="text-3xl font-gothic md:text-7xl text-black">KOM FORBI OG FÅ <span className="text-accent">EN KOP KAFFE</span></h2>
        <p className="text-black font-sans max-w-lg">Eller send os en mail og hør mere om vores faciliteter, området eller vores fremtidige planer for kontorfællesskabet</p>
        <Button text="Kontakt os her" className="bg-primary font-sans" link="mailto:kontakt@epilog.dk"/>
    </div>
  )
}

export default Contact;