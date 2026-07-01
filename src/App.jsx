import './App.css'
import Navbar from './components/layout/Navbar'
import WelcomeCard from './components/WelcomeCard'
import ReceiptCard from './components/ReceiptCard'

function App() {
  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <aside>
        <Navbar />
      </aside>
      <main className='p-6 md:p-8 overflow-y-auto w-full'>
        <div className='w-full flex flex-col md:items-center md:flex-row md:justify-between gap-6'>
          <div className='flex flex-col gap-4'>
            <span className='inline-flex text-sm font-mono uppercase text-neutral-600'>Booking • CONFIRMED</span>
            <h1 className='text-6xl font-serif text-neutral-900'>Bienvenue, <span className='text-terracotta-600 italic'>Lucia.</span></h1>
          </div>
          <div className='flex gap-4 *:w-full md:*:w-fit'>
            <button className='button-outline'>Print receipt</button>
            <button className='button-filled whitespace-nowrap'>Add to calendar</button>
          </div>
        </div>
        <div className='mt-8 flex flex-col lg:flex-row-reverse'>
          <WelcomeCard />
          <ReceiptCard />
        </div>
      </main>
    </div>
  )
}

export default App
