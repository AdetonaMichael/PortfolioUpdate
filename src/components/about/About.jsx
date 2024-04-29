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
                    <FaAward className='about__icon fa-2x'/>
                    <h5>Experience </h5>
                    <p>7+ Years Working</p>
                </article>
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Projects </h5>
                    <p>20 Clients Project Completed</p>
                </article>
                <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Experience </h5>
                    <p>3 Market Ready Solution With Pitches</p>
                </article>
              </div>
              <p>
                I Speicialize is in Building Mordern Solutions that Scale, A fan of Best Practices, Navigating entire development life cycle While  Paying attention to every detail. I hate Codebases that Smells and I love it when the system i am developing or contributing to is well structured and Easy to Navigate and understand. 
            </p>
            <a href="#contact" style={{marginTop:'20px'}} className='btn btn-primary'>Let's Talk</a>
            <a className="btn btn-primary" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=cyberlord" target="_blank">Follow on LinkedIn</a>
            </div>

         </div>
      </section>
   );
 }
 
 export default About;
 