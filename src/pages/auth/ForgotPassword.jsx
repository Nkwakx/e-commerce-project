import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


export default function ForgotPassword() {
  return (
    <div className='auth-layout'>
            <div className="back-arrow"><NavLink to='/' title="Back - Home"><BsArrowLeft /></NavLink></div>
      <form className='auth-form' action="" method="get">
      <h3>Forgot Password</h3>

      <div className="form-group form-focus">
          <label className="focus-label" htmlFor="email">
            <input type="email" id='email' className="form-control" placeholder='Email' />
            <span>Email</span>
          </label>
        </div>
        <div className='text-right'>
        <p>Already have accont? <NavLink to="/signin"> Log in</NavLink></p>
        </div>
        <input className='btn-auth btn-primary' type="button" value="Submit" />
      </form>
    </div>
  )
}
