
const InfoCard = ({ index, text, bg, icon, type, heading, caption, body}) => {

  return (
    <div className="flex-1 p-6 bg-neutral-0 rounded-4xl border-2 border-neutral-200 shadow-lg shadow-neutral-200">
      <div className={`${text} flex items-center justify-between`}>
        <div className="uppercase flex items-center justify-center gap-4">
          <div className={`${bg} w-16 h-16 p-2 flex items-center justify-center rounded-2xl`}>
            <img src={icon} alt="" />
          </div>
          <span className="font medium font-mono tracking-widest">{type}</span>
        </div>
        <span className="font-serif text-4xl">0{index+1}</span>
      </div>
      <div className="py-6">
        <h1 className="text-neutral-900 text-4xl font-serif font-medium">{heading}</h1>
        <p className="text-neutral-600 mt-4">{caption}</p>
      </div>
      <div className="text-lg text-neutral-700">
        {body}
      </div>
    </div>
  )
}

export default InfoCard