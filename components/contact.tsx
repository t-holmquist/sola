import { Button } from "./button"

export const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl font-bold md:text-2xl text-black">Kom forbi og få en kop kaffe</h2>
        <p className="text-slate-700 font-bold max-w-lg">Eller send os en mail og hør mere</p>
        <Button text="Kontakt" bgcolor="#39592c" link="mailto:kontakt@epilog.dk"/>
    </div>
  )
}

export default Contact;