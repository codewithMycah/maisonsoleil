
const WelcomeCard = () => {

  return (
    <div className="
      relative lg:absolute lg:right-10 
      lg:z-30 
      transition-transform duration-500 
      group-hover:translate-x-32 
      group-hover:-rotate-3 
      rotate-3  
      w-full max-w-105 lg:min-w-105 
      h-140 p-8 rounded-4xl 
      bg-linear-60 from-terracotta-700 to-terracotta-400 
      shadow-2xl shadow-terracotta-400/50 
      flex flex-col justify-between
      "
    >
      <div className="border-t-2 border-dashed border-neutral-0/30 text-neutral-0/50 pt-4">
        <span className="uppercase font-mono">Welcome Card</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-3xl italic font-serif">A note from your host,</span>
        <span className="text-6xl italic font-serif text-neutral-0">Margaux.</span>
        <p className="mt-6 text-neutral-0/70 text-lg">We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you.</p>
      </div>
      <div>
        <span className="uppercase font-mono text-neutral-0/50">Room</span>
        <p className="font-serif text-2xl text-neutral-0/70">La Garrigue</p>
      </div>
    </div>
  )
}

export default WelcomeCard