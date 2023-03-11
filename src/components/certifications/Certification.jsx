import React from 'react';
import './Certifications.css';
import cert1 from '../../assets/cert1.PNG';
import cert2 from '../../assets/cert2.png';
import cert3 from '../../assets/cert3.PNG';
import cert4 from '../../assets/cert4.png';
import cert5 from '../../assets/cert5.PNG';
import cert6 from '../../assets/cert6.PNG';
import cert7 from '../../assets/cert7.PNG';
import cert8 from '../../assets/cert8.PNG';
import SA from '../../assets/SA.PNG';


const Certification = () => {
  return (
     <section id="certifications">
         <h5>Review from Clients</h5>
      <h2 style={{color:'#fff'}}>certifications</h2>
        <div className='container certifications__container'>
          <article className='certification'>
          <h5 className='client__name'>Remote Mapathon Event</h5>
            <div className='client__pix'>
            <a data-fancybox="gallery" href={cert1}>
              <img src={cert1} alt="Clent pix"></img>
            </a>
            </div>
             <small className='client__review'>Remote Mapathon Event Organized By Nigeria Energy Support Programe, Where I learnt the Fundamentals of JOSM, Mapped Remote Areas lacking power etc.</small>
          </article>
          <article className='certification'>
          <h5 className='client__name'>Moses Ogboche</h5>
            <div className='client__pix'>
            <a data-fancybox="gallery" href={cert2}>
              <img src={cert2} alt="Clent pix"></img>
            </a>
            </div>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </article>     
          <article className='certification'>
          <h5 className='client__name'>Moses Ogboche</h5>
            <div className='client__pix'>
            <a data-fancybox="gallery" href={cert3}>
              <img src={cert3} alt="Clent pix"></img>
            </a>
            </div>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </article>     
          <article className='certification'>
          <h5 className='client__name'>Moses Ogboche</h5>
            <div className='client__pix'>
            <a data-fancybox="gallery" href={cert4}>
              <img src={cert4} alt="Clent pix"></img>
             </a>
            </div>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </article>     
          <article className='certification'>
          <h5 className='client__name'>Moses Ogboche</h5>
            <div className='client__pix'>
            <a data-fancybox="gallery" href={cert5}>
              <img src={cert5} alt="Clent pix"></img>
            </a>
            </div>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </article>     
          <article className='certification'>
          <h5 className='client__name'>Moses Ogboche</h5>
            <div className='client__pix'>
            <a data-fancybox="gallery" href={cert5}>
              <img src={cert6} alt="Clent pix"></img>
            </a>
            </div>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </article>     
          <article className='certification'>
          <h5 className='client__name'>Moses Ogboche</h5>
            <div className='client__pix'>
            <a data-fancybox="gallery" href={cert7}>
              <img src={cert7} alt="Clent pix"></img>
            </a>
            </div>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </article>     
          <article className='certification'>
          <h5 className='client__name'>Global Monitoring for Environment and Security (GMES) </h5>
            <div className='client__pix'>
            <a data-fancybox="gallery" href={cert8}>
              <img src={cert8} alt="Clent pix"></img>
            </a>
            </div>
             <small className='client__review'>Training Organized By ARCSSTEE. Was Thought VSAT Antenna Installation and Troubleshooting as well as downloading and Using Satellite Based Data.</small>
          </article>     
          <article className='certification'>
          <h5 className='client__name'>Spatial Analysis Basics test</h5>
            <div className='client__pix'>
            <a data-fancybox="gallery" href={SA}>
              <img src={SA} alt="Clent pix"></img>
            </a>
            </div>
             <small className='client__review'>Completed ENSRI version of Getting Started With Spatial Analysis</small>
          </article>     
        </div>
     </section>
  );
}

export default Certification;
