import React from 'react'

export default function Footer() {
  return (
    <div className='container mt-5' id='footer'>
        <div className='row mt-3 text-center'>
            <div className='col-md-6'>
                <h3 className='text-primary text-bold'>SD</h3>
                <p className=''>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
            </div>
            <div className='col-md-2 '>
                <h3 className='h6 text-white text-center'>Products</h3>
                <ul>
                  <li> <a href='#'>web studo</a></li>
                  <li> <a href='#'>DynamicBox Flex</a></li>
                  <li> <a href='#'>Programming Forms</a></li>
                </ul>
            </div>
            <div className='col-md-2'>
                <h3 className='h6 text-white text-center'>Resources</h3>
                <ul>
                  <li> <a href='#'>Nostrud exercitation</a></li>
                  <li> <a href='#'>Visual mockups</a></li>
                  <li> <a href='#'>Nostrud exercitation</a></li>
                  <li> <a href='#'>Nostrud exercitation</a></li>
                </ul>
            </div>
            <div className='col-md-2'>
                <h3 className='h6 text-white text-center'>Company</h3>
                <ul>
                  <li> <a href='#'>Nostrud exercitation</a></li>
                  <li> <a href='#'>Visual mockups</a></li>
                  <li> <a href='#'>Nostrud exercitation</a></li>
                  <li> <a href='#'>Nostrud exercitation</a></li>
                </ul>
            </div>
        </div>
        <div id='soc' className='row'>
          <p className='col-md-6 mt0-3'>© alibenhenia.com. All rights reserved.</p>
          <section className='col-md-6'>
          <ul className="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i className="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i className="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i className="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i className="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
          </section>
        </div>
    </div>
  )
}
