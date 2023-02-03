import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div style={{fontSize:24, position:'fixed', left:10, top:'40%', zIndex:10}} className='header__socials'>
       <a href="https//linkedin.com" style={{color:'#fff'}} target="_blank"><BsLinkedin/></a>
       <a href="https//github.com/AdetonaMichael" style={{color:'#fff'}} target="_blank"><FaGithub/></a>
       <a href="https//linkedin.com" style={{color:'#fff'}} target="_blank"><FiTwitter/></a>
    </div>
  );
}

export default HeaderSocials;
