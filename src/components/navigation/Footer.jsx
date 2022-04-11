import React from "react";
import { BsArrowUp, BsWhatsapp, BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { FaGooglePlusSquare } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from "react-router-dom";


export default function Footer(props) {

    return (
            <footer>
                <div className="footer container">
                    <div className="col-md-12 row">

                        <div className="col-md-3 logo-part">
                            <NavLink to=""><h1 className="logo"><span>Sporti</span>FY<i className="nav-icon"><BsArrowUp /></i></h1></NavLink>
                            <p>13 Siant John's Road, East London, 5120</p>
                            <p>Simply ecommerce application built using React JS && Firebase</p>
                        </div>

                        <div className="col-md-3 about-footer">
                            <h3> About Us</h3>
                            <p>DSK internship programme conduct at Dailmer SA Learning Academy. <a to="" className=" more-a">More Info</a></p>
                            <ul>
                                <li><NavLink to="/faq"><i className="arrow-icon"><MdOutlineKeyboardArrowRight /></i>FAQ</NavLink></li>
                                <li><NavLink to='/contact'><i className="arrow-icon"><MdOutlineKeyboardArrowRight /></i>Contact Us</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-md-3 about-footer">
                            <h3> Terms & Conditions</h3>
                            <ul>
                                <li><NavLink to=""><i className="arrow-icon"><MdOutlineKeyboardArrowRight /></i>Careers</NavLink></li>
                                <li><NavLink to=""><i className="arrow-icon"><MdOutlineKeyboardArrowRight /></i>Privacy Policy</NavLink></li>
                                <li><NavLink to=""><i className="arrow-icon"><MdOutlineKeyboardArrowRight /></i>Community & Forum</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-md-3 about-footer footer-social">
                            <h3> Social as</h3>
                            <p>Follow us up on:</p>
                            <div className="footer-social-link">
                                <NavLink to=""><i className=""></i><BsWhatsapp /></NavLink>
                                <NavLink to=""><i className=""></i><BsFacebook /></NavLink>
                                <NavLink to=""><i className=""></i><AiFillTwitterCircle /></NavLink>
                                <NavLink to=""><i className=""></i><AiFillInstagram /></NavLink>
                                <NavLink to=""><i className=""></i><FaGooglePlusSquare /></NavLink>
                                <NavLink to=""><i className=""><AiFillLinkedin/></i></NavLink>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="footer-signature">
                <p>Designed & Built by Nlakaniplo Khumalo</p>
                <p>Copyright&copy; {props.year}</p>
            </div>
            </footer>

    );
}