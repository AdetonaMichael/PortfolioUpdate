import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.PNG';
import voot from '../../assets/voot.PNG';
import portfolio3 from '../../assets/portfolio3.png';
import RemoB from '../../assets/RemoB.png';
import GeoDiscuss from '../../assets/GeoDiscuss.jfif';
import Emobile from '../../assets/emobile.png';


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2 style={{color:'#fff'}}>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a data-fancybox="gallery" href={IMG1}>
            <img src={IMG1} alt="Discussion Forum"/>
           </a>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="#" className='btn'target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a data-fancybox="gallery" href={voot}>
            <img src={voot} alt="Discussion Forum"/>
           </a>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="#" className='btn'target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a data-fancybox="gallery" href={portfolio3}>
            <img src={portfolio3} alt="Discussion Forum"/>
           </a>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="#" className='btn'target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a data-fancybox="gallery" href={RemoB}>
            <img src={RemoB} alt="Discussion Forum"/>
            </a>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="#" className='btn'target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a data-fancybox="gallery" href={IMG1}>
            <img src={IMG1} alt="Discussion Forum"/>
            </a>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="#" className='btn'target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a data-fancybox="gallery" href={Emobile}>
            <img src={Emobile} alt="Discussion Forum"/>
           </a>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="#" className='btn'target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a data-fancybox="gallery" href={GeoDiscuss}>
            <img src={GeoDiscuss} alt="Discussion Forum"/>
           </a>
          </div>
          <br/>
          <h2>GEO-DISCUSS</h2>
          <br/>
          <h4>A Discussion Fourm With Spatial analysis functionality To enable Collaborative GIS activities By Users</h4>
          <div className='portfolio__item-cta'>
          <a href="#" className='btn'target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
