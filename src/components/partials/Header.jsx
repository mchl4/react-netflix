import React from 'react'
import { baseImgUrl } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Header = ({isLogin}) => {
  return (
    <>
         <header className='header py-5 px-2'>
          <div className='max-w-[950px] w-full mx-auto px-4'>
            <div className='flex justify-between'>
            <img src={`${baseImgUrl}/logo.png`} alt="" className='w-[148] h-[70px] object-cover' />
          
        {!isLogin && (
            <ul className='flex gap-3 items-center'>
            <li><button className='btn '>English</button></li>
            <li><Link className='btn btn-accent' to="Login" >Sign Up</Link></li>
        </ul>

        )}
            
            </div>
            </div>
        </header>
    </>
  )
}

export default Header