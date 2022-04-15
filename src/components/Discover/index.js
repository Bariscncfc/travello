import React from 'react'
import santorini from '../../images/santorini.jpg'
import vernazza from '../../images/vernazza.jpg'
import sanfrancisco from '../../images/san francisco.jpg'
import navagio from '../../images/navagio.jpg'
import ao from '../../images/ao.jpg'
import phi from '../../images/phi.jpg'

const Discover = () => {
  return (
    <div className='discover  bg-light'>
    <div className='container d-flex flex-column justify-content-center align-items-center p-5'>
    <h2 className='text-dark'>Start Your Jorney</h2>
    <p>The most searched countries in April</p>    
    </div>
    <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img src={santorini} width="100%" height="225" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><i class="fa-solid fa-location-dot"></i>Santorinin, Greece</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={vernazza} width="100%" height="225" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><i class="fa-solid fa-location-dot"></i>Vernazza, Italy</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={sanfrancisco} width="100%" height="225" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><i class="fa-solid fa-location-dot"></i>San Francisco</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={navagio} width="100%" height="225" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><i class="fa-solid fa-location-dot"></i>Navagio, Greece</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={ao} width="100%" height="225" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><i class="fa-solid fa-location-dot"></i>Ao Nang, Thailland</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={phi} width="100%" height="225" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><i class="fa-solid fa-location-dot"></i>Phi Phi Islands, Thailland</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Discover