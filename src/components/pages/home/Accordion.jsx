import React from 'react'
import { GoPlus } from "react-icons/go";
import { faqs } from './data';


const Accordion = ({item}) => {
    const body = item.answer;
    const [active, setActive] = React.useState(false)

    const handleActive = () => setActive(!active) 
    
  return (
    <div className='accordion  bg-stone-800 hover:bg-stone-700 mb-2'>
    <div className='flex justify-between items-center py-5 px-6' onClick={handleActive}>
        <h4 className='question text-2xl font-bold '>{item.question}</h4>
        <GoPlus className={`text-5xl transition-all ${active ? "rotate-45" : "rotate-0"}` }/>
     </div>

<div className={`${active ? "max-h-[500px]" : "max-h-[0]"} overflow-hidden transition-all h-full border-t border-black answer`}>
    <div className='p-5' dangerouslySetInnerHTML={{__html: body}}>
    
    </div>
</div>
</div>
  )
}

export default Accordion