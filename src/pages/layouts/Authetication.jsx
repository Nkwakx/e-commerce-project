import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


export default function Authetication() {
    return (
        <>
            <div className='auth-layout'>
            <div className="back-arrow"><NavLink to='/' title="Back - Home"><BsArrowLeft /></NavLink></div>
            </div>
        </>
    )

}
