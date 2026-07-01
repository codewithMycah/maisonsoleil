import Barcode from '../assets/icon-barcode.svg'

const ReceiptCard = () => {
  const stayDetails = {
    dates: [
      {
        label: "Check In",
        date: "25 Apr",
        time: "Saturday • 15:00"
      },
      {
        label: "Check Out",
        date: "29 Apr",
        time: "Wednesday • 11:00"
      },
    ],
    services: [
      {
        description: "Room • La Garrigue x 4 nights",
        amount: "€ 620.00"
      },
      {
        description: "Breakfast • 2 guests",
        amount: "€ 96.00"
      },
      {
        description: "Tourist tax",
        amount: "€ 14.40"
      },
    ]
  }

  return (
    <div className="mx-auto -rotate-3 min-w-105 h-140 p-8 rounded-4xl bg-neutral-0 shadow-2xl shadow-neutral-400/50 flex flex-col text-neutral-900">
      <div className="pb-4 flex items-start justify-between">
        <div className="flex flex-col gap-2 text-neutral-900">
          <span className="uppercase font-mono text-neutral-900/50">Receipt</span>
          <span className="font-serif text-3xl">Your stay</span>
        </div>
        <div className="font-mono text-neutral-900/50 flex flex-col text-end">
          <span>No MS-2026</span>
          <span>0421-AH</span>
        </div>
      </div>
      <div className="flex items-center justify-between border-y-2 border-dashed border-neutral-200 py-6">
        {stayDetails.dates.map(detail => (
          <div key={detail.label} className="flex flex-col items-center">
            <span className="uppercase font-mono text-neutral-900/50">{detail.label}</span>
            <span className="mt-4 mb-2 font-serif text-5xl">{detail.date}</span>
            <span className="text-neutral-900/70">{detail.time}</span>
          </div>
        ))}
      </div>
      <div className="py-4 border-b-2 border-neutral-600">
        {stayDetails.services.map((service, index) => (
          <div key={index} className={`flex justify-between my-2 ${index === 2 ? 'text-neutral-600' : ''}`}>
            <span className={`${index !== 2 ? 'font-medium' : ''}`}>{service.description}</span>
            <span>{service.amount}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between py-4">
        <span className="uppercase text-neutral-600 font-mono">Total Paid</span>
        <span className="text-4xl font-serif font-medium">€ 730.40</span>
      </div>
      <div className="flex items-center justify-between py-4">
        <span className="uppercase text-neutral-600 font-mono">Paid • Wise • GBP</span>
        <img src={Barcode} alt="barcode" />
      </div>
    </div>
  )
}

export default ReceiptCard