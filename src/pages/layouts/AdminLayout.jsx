import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { BsArrowUp } from 'react-icons/bs';
import { MdAdminPanelSettings, MdWorkOutline, MdOutlineLocalShipping } from 'react-icons/md';
import { FaProductHunt } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';
import { IoNotificationsCircleSharp } from 'react-icons/io5';

export default function AdminLayou() {

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {

    }, [isHovering]);

    // const mouseHandler = (e) => {
    //     setIsHovering(true)
    //     console.log("slide contect", isHovering);

    // }

    
    return (
        <>
            <header className="app-header">
                <div className="mid-nav admin container">
                    <NavLink to='/' ><h2 className="logo"><span>Sporti</span>FY<i className="nav-icon"><BsArrowUp /></i></h2></NavLink>
                    <div className="admin-nav">
                        <NavLink to='/' title="Order Payments"><RiSecurePaymentFill /></NavLink>
                        <NavLink to='/' title="Notifications"><IoNotificationsCircleSharp /></NavLink>
                    </div>
                </div>
            </header>
            <div className="main-menu" onMouseEnter={(active) => {
                    console.log("active-Collap", active);
                    setIsHovering(true);
                }} onMouseLeave={(inactive) => {
                    console.log("inact-Collap", inactive);
                    setIsHovering(false);
                }}><ul>
                    <div className="side-nav">
                        <li className="side-item"><i className="icon"><MdAdminPanelSettings /></i><span className="icon-text">Admin</span></li>
                        <li className="side-item"><i className="icon"><FaProductHunt /></i>Products</li>
                        <li className="side-item"><i className="icon"><MdWorkOutline /></i>Orders</li>
                        <li className="side-item"><i className="icon"><MdOutlineLocalShipping /></i>Shipping</li>
                        <li className="side-item"><i className="icon"><GiReturnArrow /></i>Returns</li>
                    </div>
                </ul>
            </div>
           <section>
                <div className={`${isHovering ?  "active-content" : "inactive-content" } `}>
                    <Outlet />
                </div>
           </section>
        </>
    )
}
