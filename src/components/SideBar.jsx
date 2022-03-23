import React from 'react'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';


export default function SideBar(props) {

    const url = useLocation();
    console.log("Check uri", url);
    const { name, subMenus, iconClassName, path } = props;

    return (
        <>
            {url.pathname === path ? <li onClick={props.onClick}>
                <NavLink to={path} className="menu-item">
                    <div className="menu-icon">
                        <i>{iconClassName}</i>
                        <span>{name}</span>
                    </div>

                </NavLink>
                {subMenus && subMenus.length > 0 ? (
                    <ul className="sub-menu">
                        {subMenus.map((menu, index) => (
                            <li key={index}>
                                <NavLink activeclassname="active-nav" to={menu.path}>{menu.name}<i><BsArrowRight /></i></NavLink>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </li> : ""}

            
        </>
    )
}
