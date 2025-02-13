import React from 'react'
import { PiCaretRightBold } from "react-icons/pi";

const FormSubscribe = () => {
  return (
    <form action="" className='flex gap-3 items-center justify-center mt-10'>
            <div className="input-wrapper m-0 w-[450px]">
                    <input type="text" name='email' required  onChange={(e) => handleGetEmail(e)}  />
                    <label htmlFor="email">Email Address</label>
                </div>
                <button className='rounded-md bg-accent text-white text-xl p-3 flex gap-3 items-center'>Get Started <PiCaretRightBold /></button>
            </form>
  )
}

export default FormSubscribe