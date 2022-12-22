import React from 'react'
import usa from "./img/usa.jpg"
import p1 from "./img/p1.jpg"
import p2 from "./img/p2.jpg"
import p3 from "./img/p3.jpg"
import d1 from "./img/d1.jpg"
import d2 from "./img/d2.jpg"
import d3 from "./img/d3.jpg"
export default function About() {
  return (
    <div className='container text-white mt-5' id='about'>
        <hr />
        <div className='bg-dark card'>
            <div className='row'>
                <div className='col-md-6 container p-3'>
                    <h2>Optimize and scale, easy to start</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='col-md-6'>
                    <img src={usa} className='w-100 h-100'/>
                </div>
            </div>
        </div>
        <div className='container mt-5 inf'>
            <div className='container row'>
                <div className='col-md-4 on'>
                    <div className='own'>
                         <img src={p1} className='w-100'/>
                    </div>
                    <button class='bt1 bn'>Product</button>
                    <button class='bt2 bn'>Engineering</button>
                    <h2 className='h4'>The quick brown fox jumped over the lazy dog.</h2>
                    <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='row'>
                        <img src={d1} className='avts col-4' />
                        <h4 className='col-4 h5'>andrias kardel</h4>
                        <p>- Jan 17, 2020</p>
                    </div>
                </div>
                <div className='col-md-4 on'>
                    <div className='own'>
                         <img src={p2} className='w-100'/>
                    </div>
                    <button class='bt1'>Product</button>
                    <button class='bt2'>Engineering</button>
                    <h2 className='h4'>The quick brown fox jumped over the lazy dog.</h2>
                    <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='row'>
                        <img src={d2} className='avts col-4' />
                        <h4 className='col-4 h5'>andrias kardel</h4>
                        <p>- Jan 17, 2020</p>
                    </div>
                </div>
                <div className='col-md-4 on'>
                    <div className='own'>
                         <img src={p3} className='w-100'/>
                    </div>
                    <button class='bt1'>Product</button>
                    <button class='bt2'>Engineering</button>
                    <h2 className='h4'>The quick brown fox jumped over the lazy dog.</h2>
                    <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='row'>
                        <img src={d3} className='avts col-4' />
                        <h4 className='col-4 h5'>andrias kardel</h4>
                        <p>- Jan 17, 2020</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-5' id='sub'>
            <div className='container'>
                <h2>Stay in the loop</h2>
                <p>Join our newsletter to get top news before anyone else.</p>
                <div className='row'>
                    <input type='email' className='col-md-8 input' placeholder='Your best email'/>
                    <button className='col-md-3 btn '>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}
