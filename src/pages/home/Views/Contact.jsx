import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from 'react-router-dom';



export default function Contact() {
    return (
        <>
            <div className="back-arrow"><NavLink to='/' title="Back - Home"><BsArrowLeft/></NavLink></div>
            <main id="contact" className="container contact group">
                <div className="contact-social">
                    <a href="mailto:nhlakahns@gmail.com"> <p><AiOutlineMail /> nhlakahns@gmail.com</p></a>
                    <a href="tel:0725071175"><p><BiPhoneCall /> (+27) 725 071 175</p></a>
                    <a href="https://api.whatsapp.com/send?phone+27725071175"><p><AiOutlineWhatsApp /> WhatsApp</p></a>
                </div>
                <div className="contact-form">
                    <h1>Let's Talk</h1>
                    <p>As I am a working in progress, I'm looking for a real world experience where I can exercise my skills and technologies that I have learnt.</p>

                    <form action="" className="form">
                        <div className="row">
                            <div className="col col-md-6">
                                <label hidden for="fname" className="control-label">First Name</label>
                                <input type="text" id="fname" name="fname" placeholder="First Name" />
                            </div>
                            <div className="col col-md-6">
                                <label hidden for="lname" className="control-label">Last Name</label>
                                <input type="text" id="lname" name="lname" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-6">
                                <label hidden for="email" className="control-label">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="Email Address" />
                            </div>
                            <div className="col col-md-6">
                                <label hidden for="telNumber" className="control-label">Tel Number</label>
                                <input type="tel" id="telNumber" name="telNumber" placeholder="Tel Number" />
                            </div>
                        </div>
                        <div className="text-message">
                            <label hidden for="message" className="control-label">Message</label>
                            <textarea type="text" id="message" name="message" placeholder="Message" />
                        </div>
                    </form>
                    <div><button className="btn-contact">Submit</button></div>
                </div>
            </main>
        </>
    );
}