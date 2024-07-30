import { Button } from "./ui/button"

export const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-gothic md:text-8xl text-black">KOM FORBI OG FÅ EN KOP KAFFE</h2>
        <p className="text-black font-sans max-w-lg">Eller send os en mail og hør mere</p>
        <Button text="Kontakt os her" className="bg-primary font-sans" link="mailto:kontakt@epilog.dk"/>
    </div>
  )
}

export default Contact;