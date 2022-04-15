import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='position'>
            <h1 className='text-white title-h1'>Travel</h1>
            <p className='text-white title-p'>Here are my favorite travel and adventure quotes, paired with images from my journeys around the world.</p>
            <button type="button" class="btn btn-warning text-secondary">Read More</button>
        </div>
    </div>
  )
}

export default Hero