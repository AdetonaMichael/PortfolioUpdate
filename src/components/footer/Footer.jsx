import React from 'react';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import './footer.css';

const Footer = () => {
  return (
  <footer>
     <a href="#" className='footer__logo'>Michael's Porftolio</a>

     <ul className='permalinks'>
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Experience</a></li>
         <li><a href="#">Services</a></li>
         <li><a href="#">Portfolio</a></li>
         <li><a href="#">Testimonials</a></li>
         <li><a href="#">Contact</a></li>
     </ul>

     <div className='footer__socials'>
        <a  href ="#"><FaFacebook/></a>
        <a  href ="#"><FiTwitter/></a>
        <a   href = "#"><FaLinkedinIn/></a>
     </div>

     <div className='footer__copyright'>
      <small>&copy; Michael Adetona Portfolio. All rights reserved.</small>
     </div>
  </footer>
  );
}

export default Footer;
