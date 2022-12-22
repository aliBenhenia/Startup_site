import React from 'react'
import './component.css'
import vid from "./img/vid1.mp4"
import party from "./img/a1.jpg"
export default function Home() {
  return (
    <div className='container text-white' id='home'>
        <h1 className='container'>
        Landing template for startups
        </h1>
        <h2 className='h5 text-center container'>
        Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
        </h2>
       <div className='row container'>
       <button className='btn btn-primary col-12 col-md-6' id='bt1'>start free trial</button>
        <button className='btn btn-outline-primary col-12 col-md-5' id='bt2'>learn more</button>
       </div>
       <div className='container mt-5'>
                <video  controls width="100%" autoplay loop id='video'>
                <source src="/video-example.webm" type="video/webm" />
                <source src={vid} type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
       </div>
       <div className='container text-center '>
        <h1>
        Built exclusively for you
        </h1>
        <h3 className='h6'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</h3>
       </div>
       <div className='container row mt-2'>
            <div className='col-md-4  text-white feat text-center'>
                <h2><i class="fa fa-solid fa-stethoscope"></i></h2>
                <h2>1. Acquisition</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='col-md-4  text-white feat text-center'>
                <h2><i class="fa fa-solid fa-wifi"></i></h2>
                <h2>2. Activation</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='col-md-4  text-white feat text-center'>
                <h2><i class="fa fa-solid fa-truck"></i></h2>
                <h2>3. Retention</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
       </div>
       <hr />
       <div className='container row text-white'>
            <div className='col-md-6'>
                <p id='light'>Lighting fast workflow</p>
                <h2>Say hello to research data</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                        <div>
                        <i class="fa fa-sharp fa-solid fa-forward text-primary"></i><i>Premium statistics</i> <hr />
                            <i class="fa fa-sharp fa-solid fa-forward text-primary"></i><i>Free goods</i> <hr />
                            <i class="fa fa-sharp fa-solid fa-forward text-primary"></i><i>No code required</i> <hr />
                            <i class="fa fa-sharp fa-solid fa-forward text-primary"></i><i>No code required</i> <hr />
                        </div>
            </div>
            <div className='container col-md-6'>
                <div id='box'>
                    <img src={party} className='w-100 ' id='party'/>
                    <div id='overlay' className='text-white pt-5 text-center'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</div>
                </div>
            </div>
       </div>
       <div className='container text-center mt-5 bts'>
            <h2>Integrated workflow designed for product teams</h2>
            <h4 className='h6'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</h4>
            <button className='btn btn-dark text-white'>Quick action </button> 
            <button className='btn btn-dark text-white'>Quick action </button> 
            <button className='btn btn-dark text-white'>Quick action </button> 
            <button className='btn btn-dark text-white'>Quick action </button> 
            <button className='btn btn-dark text-white'>Quick action </button> 
       </div>
    </div>
  )
}
