import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'

const Features = ({item}) => {
  return (
    <div className='feature border-t-[5px] border-b-[5px] border-gray-500 bg-black py-12 text-white'>
        <div className='max-w-[1200px] mx-auto px-4'>
            <div className='grid grid-cols-2 grid-gap-5'>
                <div className='content self-center'>
                    <h2 className='font-bold text-4xl mb-5'>{item.header}</h2>
                    <p className='text-xl'>{item.body}</p>
                </div>
                <div className=' imge justify-self-center'>
                    <img src={`${baseImgUrl}/${item.img}`} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features