import Link from "next/link";


const Infocard = ({className, title, description, link}: {
    className?: string;
    title: string;
    description: string;
    link?: string;
} ) => {
  return (
    <div className={`border border-accent bg-backgroundSandDark rounded-2xl px-8 py-6 ${className}`}>
        <h3 className="text-3xl font-gothic">{title}</h3>
        {link ? (
          <Link className="cursor-default" href={link}>
            <p className="font-sans cursor-pointer text-accent underline hover:text-blue-600 w-fit">{description}</p>
          </Link>
        ) : (
          <p className="font-sans">{description}</p>
        )}
    </div>
  )
}

export default Infocard;