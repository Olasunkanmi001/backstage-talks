import React from 'react'
import image from '../assets/images/Issue_7.png'

const Issue7 = () => {
  return (
    <div className='grid text-center'>
      <img src={image} className='shadow-2xl'/>
      <h1>Issue #7</h1>
      <p>BUY HERE <span>(Europe)</span></p>
      <p>BUY HERE <span>(UK & Overseas)</span></p>
      <h6>or in <span>selected store</span></h6>

    </div>
  )
}

export default Issue7