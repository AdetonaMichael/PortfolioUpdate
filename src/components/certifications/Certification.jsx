import React from 'react';
import './Certifications.css';
import cert1 from '../../assets/cert1.PNG';
import cert2 from '../../assets/cert2.png';
import cert3 from '../../assets/cert3.PNG';


const Certification = () => {
  return (
     <section id="certifications">
         <h5>Review from Clients</h5>
      <h2 style={{color:'#fff'}}>certifications</h2>
        <div className='container certifications__container'>
          <article className='certification'>
          <h5 className='client__name'>Moses Ogboche</h5>
            <div className='client__pix'>
              <img src={cert1} alt="Clent pix"></img>
            </div>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </article>
          <article className='certification'>
          <h5 className='client__name'>Moses Ogboche</h5>
            <div className='client__pix'>
              <img src={cert2} alt="Clent pix"></img>
            </div>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </article>     
          <article className='certification'>
          <h5 className='client__name'>Moses Ogboche</h5>
            <div className='client__pix'>
              <img src={cert3} alt="Clent pix"></img>
            </div>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </article>     
        </div>
     </section>
  );
}

export default Certification;
