import React from 'react'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import './component.css'
export default function Header() {
    const [toggle,setToggle] = useState(false);
  return (
    <div id='header' >
    <div className='container mt-2'>
               <div id ='logo'>
                  <h2>SD</h2>
                </div>
                <div id='nav-bar'  onClick={()=> setToggle(!toggle)}>
                   {/* <i onClick={()=> setToggle(!toggle)}  className="fa fa-duotone fa-bars"></i>  */}
                   <Hamburger onClick={()=> setToggle(!toggle)} />
                </div>
        <aside id='pos' className={toggle ? "sh" : "hid"}>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="About">About us</a></li>   
                        <li><a href="">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
                <div id='sign' className="">
                    <a href="#" className='btn text-white' id='b1'>sign in</a>
                    <a href="/login" className='btn' id='b2'>sign up</a>
                   <h1 className='text-white'>
                   </h1>
                </div>  
        </aside>
    </div>
    </div>
  )
}
