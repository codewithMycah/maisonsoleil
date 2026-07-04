import './App.css'
import Navbar from './components/layout/Navbar'
import WelcomeCard from './components/WelcomeCard'
import ReceiptCard from './components/ReceiptCard'
import Breakfast from './assets/icon-breakfast.svg'
import Key from './assets/icon-key.svg'
import Wifi from './assets/icon-wifi.svg'
import Sun from './assets/illustration-sun.svg'
import Sparkle from './assets/icon-sparkle.svg'
import InfoCard from './components/InfoCard'

function App() {
  const infoCard = [
    {
      text: "text-terracotta-600",
      bg: "bg-terracotta-600",
      icon: Key,
      type: "Arrival",
      heading: "Check-in from 15:00",
      caption: "Sat, 25 April",
      body: <p>Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.</p>
    },
    {
      text: "text-blue-500",
      bg: "bg-blue-500",
      icon: Wifi,
      type: "Wifi",
      heading: "Le Soleil • Guest",
      caption: "Password below",
      body: <div className='flex flex-col gap-2'>
        <div className='bg-neutral-100 px-4 py-2 rounded-xl flex items-center justify-between'>
          <span className='uppercase font-mono tracking-widest text-neutral-600'>Network</span>
          <span className='text-neutral-900'>Le Soleil • Guest</span>
        </div>
        <div className='bg-neutral-100 px-4 py-2 rounded-xl flex items-center justify-between'>
          <span className='uppercase font-mono tracking-widest text-neutral-600'>Password</span>
          <span className='flex items-center  gap-2 text-neutral-900'>soleil-2026 <button onClick={() => navigator.clipboard.writeText("soleil-2026")}  className='px-2 rounded-2xl text-sm border-2 border-neutral-400 hover:button-hover hover:cursor-pointer focus:bg-neutral-900 focus:font-medium focus:text-neutral-0'>COPY</button></span>
        </div>
      </div>
    },
    {
      text: "text-rose-500",
      bg: "bg-rose-500",
      icon: Breakfast,
      type: "Breakfast",
      heading: "Served 8 - 10:30",
      caption: "On the terrace",
      body: <p>Fresh figs. Marseille honey, pain au levain, and espress. Gluten-free option? Leave a note the night before.</p>
    },
  ]

  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <aside>
        <Navbar />
      </aside>
      <main className='p-6 md:p-8 overflow-y-auto w-full'>
        <div className='w-full flex flex-col lg:items-center lg:flex-row lg:justify-between gap-6'>
          <div className='flex flex-col gap-4'>
            <span className='inline-flex text-sm font-mono uppercase text-neutral-600'>Booking • CONFIRMED</span>
            <h1 className='text-6xl font-serif text-neutral-900'>Bienvenue, <span className='text-terracotta-600 italic'>Lucia.</span></h1>
          </div>
          <div className='flex gap-4 *:w-full md:*:w-fit'>
            <button className='button-outline hover:cursor-pointer hover:button-hover focus:bg-neutral-900 focus:font-medium focus:text-neutral-0'>Print receipt</button>
            <button className='button-filled whitespace-nowrap hover:cursor-pointer hover:button-hover focus:bg-neutral-0 focus:font-medium focus:text-neutral-900'>Add to calendar</button>
          </div>
        </div>
        <div className='h-300 lg:h-145 mt-8 group relative max-w-4xl mx-auto items-center justify-center flex flex-col lg:flex-row'>
          <WelcomeCard />
          <img src={Sun} alt="Sun" className='hidden lg:block absolute w-44 h-44 opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100'/>
          <ReceiptCard />
        </div>
        <div className='hidden uppercase font-mono text-terracotta-500 bottom-0 lg:flex lg:flex-row gap-3 justify-center'>
            <img src={Sparkle} alt="" /> Hover to fan <img src={Sparkle} alt="" />
          </div>
        <div className='mt-16 grid xl:grid-cols-3 gap-4'>
          {infoCard.map((info, index) => (
            <InfoCard
              key={index}
              index={index}
              text={info.text}
              bg={info.bg}
              icon={info.icon}
              type={info.type}
              heading={info.heading}
              caption={info.caption}
              body={info.body}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
