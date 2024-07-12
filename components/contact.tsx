import { Button } from "./button"

export const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl font-bold md:text-4xl text-black">Kom forbi og få en kop kaffe</h2>
        <p className="text-slate-700 font-bold max-w-lg">Eller send os en mail og hør mere</p>
        <Button text="Kontakt os her" className="bg-primary" link="mailto:kontakt@epilog.dk"/>
    </div>
  )
}

export default Contact;