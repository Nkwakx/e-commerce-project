import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowUp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import { useAuth } from './../../firebase/FirebaseAuthHook';

export default function NavBar(props) {

  const { Logout, CurrentUser } = useAuth();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (CurrentUser !== null) {
      setCurrentUser({
        displayName: CurrentUser.displayName, email: CurrentUser.email, profileUrl:
          CurrentUser.profileUrl, uid: CurrentUser.uid, role: CurrentUser.role
      })
    } else {
      setCurrentUser(null);
    }
  }, [CurrentUser])


  // useEffect(() => {
  //   GetAuthState()
  //     .then((value) => {
  //       if (value && value.uid && value.uid.length > 0) {
  //         console.log("user is signed in and valid", value);
  //         setCurrentUser(value);
  //       } else {
  //         console.log("User is signed out and no longer valid", value);
  //         setCurrentUser({ displayName: "", email: "", profileUrl: "", uid: "", role: "" })
  //       }
  //     })
  //     .catch((error) => { })
  // }, [GetAuthState()])

  // function AuthNon() {
  //   return AllRoutes.reverse().map((entry, index) => {
  //     if (currentUser && currentUser.uid && currentUser.uid.length > 0) {
  //       return (
  //         <React.Fragment key={index}>
  //           {entry.name === RoutesObj.sign_in.name || entry.name === RoutesObj.sign_up.name ? (
  //             <React.Fragment key={index}></React.Fragment>
  //           ) : (<NavLink className='navItem' key={index} to={entry.path}>
  //             {entry.name}
  //           </NavLink>)}
  //         </React.Fragment>
  //       );
  //     } else {
  //       return (<NavLink className='navItem' key={index} to={entry.path}>
  //         {entry.name}
  //       </NavLink>)
  //     }
  //   })
  // }

  const url = useLocation();

  return (
    <header className="app-header">

      <div className="top-nav container">
        <NavLink to='/' ><h5 className="logo"><span>Sporti</span>FY<i className="nav-icon"><BsArrowUp /></i></h5></NavLink>

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

      <div className="mid-nav container">

        <div className="searchBox">
          <input className="searchInput" type="text" name="" placeholder="Search" />
          <button className="searchButton" href="">
            <i className="material-icons">
              Search
            </i>
          </button>
        </div>
        {/* <div>Hello Word</div> */}
        <div className="dynamic-wrapper">
         
          <ul className="dynamic-txts">
            <li><span>Sportify</span></li>
          </ul>
        </div>

        <div className="mid-social">
          <NavLink to='/' className="orders" title="Oders"><AiFillHeart /></NavLink>
          <NavLink to='cart' className="orders" title="Cart"><AiOutlineShoppingCart /><span> 0</span></NavLink>
          {currentUser === null && (<NavLink to='/signin' className="Sign-in"> Login/Register</NavLink>)}
          {currentUser?.uid?.length > 0 && (<button className="Sign-in" onClick={() => { Logout(); }}>Logout</button>)}
        </div>
      </div>

      {url.pathname === "/" ? <><div className="nav-mobile">
        <hr />
      </div>
        <div className="main-nav-mobile">
          <NavLink className={"nav-link"} to='/'>Home</NavLink>
          <NavLink className={"nav-link"} to='/fitness'>Fitness</NavLink>
          <NavLink className={"nav-link"} to='/supplements'>Supplememnt</NavLink>
          <NavLink className={"nav-link"} to='/watersport'>Watersport</NavLink>
        </div>
      </> : ""}

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