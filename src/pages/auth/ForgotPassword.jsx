import React from 'react'
import { NavLink } from 'react-router-dom';
import Authetication from '../layouts/Authetication';


export default function ForgotPassword() {
  return (
    <>
      <Authetication />

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
        <input className='btn-auth' type="button" value="Submit" />
      </form>
    </>
  )
}
