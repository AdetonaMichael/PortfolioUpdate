import React from 'react';
import  './Header.css';
// import CTA from '../header/CTA.jsx';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import {FiArrowDownCircle} from 'react-icons/fi';

const Header = () => {
  return (
    <header>
      <div className='container  header__container'>
          <h5>Hello, I'm </h5>
          <h1>Michael Adetona</h1>
          <h5 className='text-light'>Full Stack Developer</h5>
          {/* <CTA/> */}
          <HeaderSocials/>

          <div className='me'>
            <img src={ME} alt="me"/>
          </div>
          <a href ="#contact" className='scroll__down'><FiArrowDownCircle/></a>
      </div>
    </header>
  );
}

export default Header;
