import React from "react";
import { NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserLock } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import { Logout } from './../firebase/FirebaseAuth';



export default function NavBar(props) {

  const url = useLocation();

  return (
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
      <div className="mid-nav">
        <NavLink to='/' ><h2 className="logo"><span>Sporti</span>FY<i className="nav-icon"><BsArrowUp /></i></h2></NavLink>

        <div className="searchBox">
          <input className="searchInput" type="text" name="" placeholder="Search" />
          <select type="text" className="searchSelect">
            <option className="selectOption">Choose</option>
          </select>
          <button className="searchButton" href="#">
            <i className="material-icons">
              search
            </i>
          </button>
        </div>
        <div className="mid-social">
          <NavLink to='/' title="Oders"><BsBookmarkHeart /></NavLink>
          <NavLink to='/' title="Cart"><AiOutlineShoppingCart /></NavLink>
          <NavLink to='/signin' title="Sign in"> <FaUserLock /> <BiLogIn /></NavLink>

          {/* <button onClick={() => {Logout();}}>Logout</button> */}
        </div>
  
      </div>
      {url.pathname !== "/" ? <><hr />
        <div className="main-nav">
          <NavLink className={"nav-link"} to='/'>Home</NavLink>
          <NavLink className={"nav-link"} to='/fitness'>Fitness</NavLink>
          <NavLink className={"nav-link"} to='/supplements'>Supplememnt</NavLink>
          <NavLink className={"nav-link"} to='/watersport'>Watersport</NavLink>
        </div>
      </> : ""}
      
    </header>
  )
}