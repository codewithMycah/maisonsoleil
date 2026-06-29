import { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Weather from '../Weather'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const tabs = [
    {
      label: 'Your stay', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><g stroke="#2b2620" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"><path d="M15.656 10.1V5.986c0-.546 0-.819-.079-1.038a1.33 1.33 0 0 0-.803-.803c-.219-.079-.492-.079-1.038-.079h-7.47c-.547 0-.82 0-1.039.08a1.33 1.33 0 0 0-.802.802c-.08.219-.08.492-.08 1.038V10.1"/><path d="M9.167 10.1v-.5c0-.34 0-.511-.05-.648a.83.83 0 0 0-.501-.502c-.137-.05-.308-.05-.65-.05H7.45c-.341 0-.512 0-.649.05a.83.83 0 0 0-.502.502c-.049.137-.049.307-.049.649v.498m7.5.001v-.5c0-.34 0-.511-.05-.648a.83.83 0 0 0-.501-.502c-.137-.05-.308-.05-.649-.05h-.517c-.341 0-.512 0-.649.05a.83.83 0 0 0-.501.502c-.05.137-.05.307-.05.649v.498"/><path d="M17.5 15.933v-3.914c0-.546 0-.82-.079-1.038a1.33 1.33 0 0 0-.803-.803c-.219-.079-.492-.079-1.038-.079H4.42c-.546 0-.82 0-1.038.08a1.33 1.33 0 0 0-.803.802c-.079.219-.079.492-.079 1.038v3.914m0-1.033h15"/></g></svg>
    },
    {
      label: 'The house', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><g stroke="#2b2620" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"><path d="M3.748 7.313v7.229A2.553 2.553 0 0 0 6.3 17.095h7.4a2.553 2.553 0 0 0 2.552-2.553v-7.23"/><path d="m17.5 8.297-6.272-4.965a1.98 1.98 0 0 0-2.456 0L2.5 8.297M14.723 4.12v1.96M8.036 17.095v-3.099c0-.667 0-1 .124-1.258a1.25 1.25 0 0 1 .583-.583c.258-.124.591-.124 1.258-.124.668 0 1.001 0 1.258.124.255.123.46.329.583.583.124.258.124.591.124 1.258v3.1"/></g></svg>
    },
    {
      label: 'Around town', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><g stroke="#2b2620" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"><path d="M3.979 9.022c0 4.284 5.057 8.378 6.02 8.378.964 0 6.021-4.094 6.021-8.378a6.02 6.02 0 1 0-12.041 0"/><path d="M12.006 8.972a2.006 2.006 0 1 0-4.013 0 2.006 2.006 0 0 0 4.013 0" clipRule="evenodd"/></g></svg>
    },
    {
      label: 'Breakfast', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><g stroke="#2b2620" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"><path d="M15.98 17.462H4.02c-.67 0-1.265-.43-1.477-1.064a.835.835 0 0 1 .793-1.1h13.328c.57 0 .973.559.793 1.1a1.56 1.56 0 0 1-1.477 1.064" clipRule="evenodd"/><path d="M11.102 7.888v-.943a1.103 1.103 0 0 0-2.204 0v.943"/><path d="m3.553 15.299-.034-.691a6.49 6.49 0 1 1 12.963 0l-.035.69M15.02 4.463a.995.995 0 0 0 0 1.409m-11.958 0a.995.995 0 0 1 0 1.408M6.78 2.538a.996.996 0 0 1 0 1.409.995.995 0 0 0 0 1.408"/></g></svg>
    },
    {
      label: 'Messages', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><g stroke="#2b2620" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"><path d="M17.5 12.579c0 2.304-1.537 4.177-3.818 4.171H6.318c-2.28.006-3.818-1.867-3.818-4.171V7.428c0-2.302 1.537-4.178 3.818-4.178h7.364c2.28 0 3.818 1.876 3.818 4.178z"/><path d="m17.156 5.733-5.39 4.384a2.79 2.79 0 0 1-3.47 0L2.859 5.733"/></g></svg>
    }
  ]

  return (
    <nav className='bg-sun-50 relative h-24 p-6 flex items-center justify-between border-b-2 border-b-neutral-400 z-20 md:w-96 md:border-r-2 md:h-screen md:items-start md:border-b-0'>
      <img src={Logo} alt='Maison Soleil' />
      <button onClick={() => setIsOpen(prev => !prev)} className='md:hidden p-2 border border-neutral-300 rounded-md'>
        {isOpen 
          ? <XMarkIcon className='w-6 h-6 text-neutral-800' />
          : <Bars3Icon className='w-6 h-6 text-neutral-800' />
        }
        
      </button>
      {isOpen && (
        <div className='md:hidden h-[calc(100dvh-96px)] absolute inset-0 mt-24 px-6 py-4 text-neutral-700'>
          <div className='h-full flex flex-col justify-between'>
            <div className='flex flex-col items-start gap-2'>
              {tabs.map((tab, index) => (
                <div key={index} className='w-full flex flex-row gap-2 p-4 hover:bg-neutral-0 hover:rounded-lg font-medium'>
                  {tab.icon}
                  {tab.label}
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-4'>
            <Weather />
            <div className='text-lg font-mono uppercase flex flex-col gap-4 border-dashed border-t-2 pt-4'>
              <span>EST. 1987</span>
              <span>Maison Soleil • 12 Rue Des Oliviers • Cassis</span>
              <span>© 2026 Maison Soleil</span>
            </div>
          </div>
          </div>
        </div>
      )}
      <div className='hidden md:block h-[calc(100dvh-96px)] absolute inset-0 mt-24 mx-6 py-4 text-neutral-700 border-t-2'>
        <div className='h-full flex flex-col justify-between'>
          <div className='flex flex-col items-start gap-2'>
            {tabs.map((tab, index) => ( 
              <div key={index} className='w-full flex flex-row gap-2 p-4 hover:bg-neutral-0 hover:rounded-lg font-medium'>
                {tab.icon}
                {tab.label}
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            <Weather />
            <div className='text-md font-mono uppercase flex flex-col gap-4 border-dashed border-t-2 pt-4'>
              <span>EST. 1987</span>
              <span>Maison Soleil • 12 Rue Des Oliviers • Cassis</span>
              <span>© 2026 Maison Soleil</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar