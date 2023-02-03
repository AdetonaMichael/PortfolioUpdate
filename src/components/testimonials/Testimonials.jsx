import React from 'react'
import './Testimonials.css';
import AVATAR1 from '../../assets/avatar1.jpg';


// import Swiper core and required modules
import { Navigation, Pagination ,  A11y} from 'swiper';
// swiper controls
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2 style={{color:'#fff'}}>Testimonials</h2>
        <Swiper
        modules={[Navigation, Pagination,  A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className='container testimonials__container'>
          <SwiperSlide className='testimonial'>
            <div className='client__avatar'>
              <img src={AVATAR1} alt="Clent Avatar"></img>
            </div>

             <h5 className='client__name'>Moses Ogboche</h5>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
            <div className='client__avatar'>
              <img src={AVATAR1} alt="Clent Avatar"></img>
            </div>

             <h5 className='client__name'>Moses Ogboche</h5>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
            <div className='client__avatar'>
              <img src={AVATAR1} alt="Clent Avatar"></img>
            </div>

             <h5 className='client__name'>Moses Ogboche</h5>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
            <div className='client__avatar'>
              <img src={AVATAR1} alt="Clent Avatar"></img>
            </div>

             <h5 className='client__name'>Moses Ogboche</h5>
             <small className='client__review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi porro vel dignissimos veniam mollitia neque!</small>
          </SwiperSlide>
         
        </Swiper>
    </section>
  )
}
