import React from 'react'
import { FaPlay, FaPlusCircle } from 'react-icons/fa'
import { movies } from './data'
import { baseImgUrl } from '../../helpers/functions-general'

const MovieRelatedCard = ({mov, key}) => {


  return (
    <>
    <div className='card group' key={key}>
        <div className='relative'>
            <span className='absolute top-2 right-2 text-xs'>{mov.duration}</span>
            <button className='absolute cursor-pointer group-hover:opacity-100 transition-opacity opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'><FaPlay className='text-3xl'/></button>
            <img src={`${baseImgUrl}/movies/${mov.image}`} alt="" className='w-full h-[150px] object-cover opacity-80'/>
        </div>

        <div className='card__info p-2'>
            <div className='flex justify-between items-center mb-5'>
                <ul className='flex items-center gap-2'>
                    <li><span className='p-0.5 border border-white text-sm'>{mov.rating} +</span></li>
                    <li><span className='p-0.5 border border-white text-[10px]'>HD</span></li>
                    <li className='text-xs'>{mov.year}</li>
                </ul>
                <button><FaPlusCircle/></button>
            </div>
            <p className='text-sm'>{mov.description}</p>
        </div>
        
    </div>
    </>
  )
}

export default MovieRelatedCard