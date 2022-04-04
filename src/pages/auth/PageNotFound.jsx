import React from 'react'
import { NavLink } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <>
      <div class="main-wrapper">

        <div class="error-box">
          <h1>404</h1>
          <h3 class="h2 mb-3"><i class="fa fa-warning"></i> Oops! Page not found!</h3>
          <p class="h4 font-weight-normal">The page you requested was not found.</p>
          <NavLink to='/' class="btn btn-primary">Back to Home</NavLink>
        </div>

      </div>
    </>
  )
}
