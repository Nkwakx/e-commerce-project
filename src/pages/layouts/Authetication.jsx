import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';


export default function Authetication() {
    return (
        <>
            <header className="app-header">
                <div className="top-nav">
                    <div className="nav-contact">
                        <a href="tel:+27725071175"><i className="nav-icon"><BiPhoneCall /></i> (+27) 7250 71175</a>
                        <a href="mailto: nhlakahns@gmail.com"><i className="nav-icon"><AiOutlineMail /></i> nhlakahns@gmail.com</a>
                    </div>
                    <div className="top-social">
                        <NavLink to='/' title="Oders"><BsFacebook /></NavLink>
                        <NavLink to='/' title="Cart"><AiOutlineInstagram /></NavLink>
                        <NavLink to='/' title="Sign in"> <AiFillTwitterCircle /></NavLink>
                    </div>
                </div>
            </header>
            {/* <div className='auth-layout'>

            </div> */}
        </>
    )

}
