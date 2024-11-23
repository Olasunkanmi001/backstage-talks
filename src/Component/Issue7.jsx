import React from 'react'
import image from '../assets/images/Issue_7.png'

const Issue7 = () => {
  return (
    <div className='grid text-center bg-[#FF608C]'>
      <img src={image} className='shadow-2xl'/>
      <h1 className='text-black text-lg font-bold mt-5 mb-5'>Issue #7</h1>
      <p className='text-white font-bold'>BUY HERE <span className='text-black'>(Europe)</span></p>
      <p className='text-white font-bold mb-5 mt-2'>BUY HERE <span className='text-black'>(UK & Overseas)</span></p>
      <h6 className='font-bold'>or in <span className='text-white'>selected stores</span></h6>

    </div>
  )
}

export default Issue7