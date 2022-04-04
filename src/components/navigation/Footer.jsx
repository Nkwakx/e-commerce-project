import React from "react";
import { BsArrowUp, BsWhatsapp, BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { FaGooglePlusSquare } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';


export default function Footer(props) {

    
    return (
            <footer>
                <div className="footer container">
                    <div className="col-md-12 row">

                        <div className="col-md-3 logo-part">
                            <a href=""><h1 className="logo"><span>Sporti</span>FY<i className="nav-icon"><BsArrowUp /></i></h1></a>
                            <p>13 Siant John's Road, East London, 5120</p>
                            <p>Simply ecommerce application built using React JS && Firebase</p>
                        </div>

                        <div className="col-md-3 about-footer">
                            <h3> About Us</h3>
                            <p>DSK internship programme conduct at Dailmer SA Learning Academy. <a to="" className=" more-a">More Info</a></p>
                            <ul>
                                <li><a href=""><i className="arrow-icon"><MdOutlineKeyboardArrowRight /></i>FAQ</a></li>
                                <li><a href=""><i className="arrow-icon"><MdOutlineKeyboardArrowRight /></i>Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 about-footer">
                            <h3> Terms & Conditions</h3>
                            <ul>
                                <li><a href=""><i className="arrow-icon"><MdOutlineKeyboardArrowRight /></i>Careers</a></li>
                                <li><a href=""><i className="arrow-icon"><MdOutlineKeyboardArrowRight /></i>Privacy Policy</a></li>
                                <li><a href=""><i className="arrow-icon"><MdOutlineKeyboardArrowRight /></i>Community & Forum</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 about-footer footer-social">
                            <h3> Social as</h3>
                            <p>Follow us up on:</p>
                            <div className="footer-social-link">
                                <a href=""><i className=""></i><BsWhatsapp /></a>
                                <a href=""><i className=""></i><BsFacebook /></a>
                                <a href=""><i className=""></i><AiFillTwitterCircle /></a>
                                <a href=""><i className=""></i><AiFillInstagram /></a>
                                <a href=""><i className=""></i><FaGooglePlusSquare /></a>
                                <a href=""><i className=""><AiFillLinkedin/></i></a>
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