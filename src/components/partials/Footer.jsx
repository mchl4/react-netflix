import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className=' bg-black text-white/75 border-t-[3px] border-stone-600'>

        <div className='w-[1000px] w-full mx-auto px-4 py-14 grid grid-cols-4 gap-5 items-center text-sm' >
        <ul className='flex flex-col gap-2 underline'>
            <li><Link to="#">Questions? Contact us.</Link></li>
            <li><Link to="#">FAQ</Link></li>
            <li><Link to="#">Investor Relations</Link></li>
            <li><Link to="#">Ways to Watch</Link></li>
            <li><Link to="#">Corporate Information</Link></li>
            <li><Link to="#">Only on Netflix</Link></li>
            <li><button className='btn '>English</button></li>
        </ul>
        <ul className='flex flex-col gap-2 underline'>
            <li><Link to="#">Help Center</Link></li>
            <li><Link to="#">Jobs</Link></li>
            <li><Link to="#">Terms of Use</Link></li>
            <li><Link to="#">Contact Us</Link></li>   
        </ul>
        <ul className='flex flex-col gap-2 underline'>
            <li><Link to="#">Account</Link></li>
            <li><Link to="#">Redeem Gift Cards</Link></li>
            <li><Link to="#">Privacy</Link></li>
            <li><Link to="#">Speed Test</Link></li>
        </ul>
        <ul className='flex flex-col gap-2 underline'>
            <li><Link to="#">Media Center</Link></li>
            <li><Link to="#">Buy Gift Cards</Link></li>
            <li><Link to="#">Cookie Preferences</Link></li>
            <li><Link to="#">Legal Notices</Link></li>
        </ul>
        <p className='text-sm'><Link to="#" >Netflix Philippines</Link></p>
    </div>
   
    </footer>
    
    </>
  )
}

export default Footer