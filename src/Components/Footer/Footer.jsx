import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=''/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className='footer-social-icon'>
                <FaFacebook className='social-icon'/>
                <FaInstagram className='social-icon'/>
                <FaLinkedin className='social-icon'/>
                </div>
            </div>
            <div className='footer-content-center'>
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>

            </div>
            <div className='footer-content-right'>
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91 8854762483</li>
                <li>Contact@tech.com</li>
              </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 Tech.com - All Right Reserved</p>
    </div>
  )
}

export default Footer