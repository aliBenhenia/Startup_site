import React from 'react'

export default function Login() {
  return (
    <div className='container' id='login'>
        <div id='anule'> 
            <a href='/'>X</a>
        </div>
       <h1 className='container text-center mt-5'>Welcome. We exist to make entrepreneurship easier.</h1>
       <div className='container text-center mt-5'>
            <button className='btn btn-danger w-70'>
            <i class="fa fa-brands fa-google"></i>  | sign up with google
            </button>
            <h5 className=''>Or, register with your email</h5>
            <div className='container'>
                <form>
                    <label>Full name</label>
                    <input type='text' placeholder='first and last name'/>
                    <label>Company Name *</label>
                    <input type='text' placeholder='your company'/>
                    <label>Work Email </label>
                    <input type='email' placeholder='yourmail@gmail.com'/>
                    <label>Password *</label>
                    <input type='password' placeholder='password (at least 10 characters)'/>
                 <p>I agree to be contacted by Open PRO about this offer as per the Open PRO Privacy Policy.</p>
                 <button className='btn btn-primary w-50'>sign up</button>
                 <p>Already using Open PRO?<a href='#'> Sign in</a></p>
                </form>
            </div>
       </div>
    </div>
  )
}
