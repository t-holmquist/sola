

const Infocard = ({className, title, description}: {
    className?: string;
    title: string;
    description: string;
} ) => {
  return (
    <div className={`border border-accent bg-backgroundSandDark rounded-2xl px-8 py-6 ${className}`}>
        <h3 className="text-3xl font-gothic">{title}</h3>
        <p className="font-sans">{description}</p>
    </div>
  )
}

export default Infocard;