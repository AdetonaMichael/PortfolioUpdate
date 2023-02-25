 import React from 'react';
 import './About.css';
 import ABOUT_ME from '../../assets/about_me.png';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

 const About = () => {
   return (
   
      <section id="about">
         <h5>Get To Know</h5>
         <h2 style={{color:'#fff'}}>About Me</h2>

         <div className='container about__container'>
            <div className='about__me-image'>
                <img src={ABOUT_ME} alt="About Me"/>
            </div>
            <div className='about__content'>
              <div className='about__cards'>
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience </h5>
                    <small>3+ Years Working</small>
                </article>
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Projects </h5>
                    <small>80+ Completed</small>
                </article>
                <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Experience </h5>
                    <small>100+ World Wide</small>
                </article>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id mollitia rerum at facilis minus est vel maxime repellendus ex debitis iusto sed porro eius, non nam incidunt nulla. Quibusdam!
            </p>
            <a href="#contact" style={{marginTop:'20px'}} className='btn btn-primary'>Let's Talk</a>
            <a className="btn btn-primary" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=cyberlord" target="_blank">Follow on LinkedIn</a>
            </div>

         </div>
      </section>
   );
 }
 
 export default About;
 