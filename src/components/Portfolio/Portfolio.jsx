import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.PNG';
import voot from '../../assets/voot.PNG';
import portfolio3 from '../../assets/portfolio3.png';
import Quiz from '../../assets/Quiz.PNG';
import RemoB from '../../assets/RemoB.png';
import GeoDiscuss from '../../assets/GeoDiscuss.jfif';
import Emobile from '../../assets/emobile.png';
import Ebeacon from '../../assets/ebeacon_api.png';
import Adonis from '../../assets/adonis.png';


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
          <a data-fancybox="gallery" href={Quiz}>
            <img src={Quiz} alt="Discussion Forum"/>
            </a>
          </div>
          <br/>
          <h2>(Dahara Capital Nigeria Ltd.)</h2>
          <h3>Who Wants to Be a Millionaire API and Gaming Platform</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/RemoNode-Technologies-Inc/Millionaire-1" className='btn'target='_blank'>Github</a>
          <a href="https://daharagames.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a data-fancybox="gallery" href={Emobile}>
            <img src={Emobile} alt="Discussion Forum"/>
           </a>
          </div>
          <br/>
          <h2>E-beacon Mobile</h2>
          <h3>A platform For Client to access, manage and share their land related documents and also connect with their surveyors as well</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/RemoNode-Technologies-Inc/E-beacon1.0" className='btn'target='_blank'>Github</a>
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
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a data-fancybox="gallery" href={Ebeacon}>
            <img src={Ebeacon} alt="Discussion Forum"/>
           </a>
          </div>
          <br/>
          <h2>Electronic Beaconing System API</h2>
          <br/>
          <h4> The E-Beacon API allows users to access Survey Beacon Data managed by the Office of Surveyor General. This API provides functionality to interact with users, their documents, and surveyor-related information.</h4>
          <div className='portfolio__item-cta'>
          <a href="#" className='btn'target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a data-fancybox="gallery" href={Adonis}>
            <img src={Adonis} alt="Discussion Forum"/>
           </a>
          </div>
          <br/>
          <h2>(Adonis Place) E-commerce and Beacuty Spa</h2>
          <br/>
          <h4> The E-Beacon API allows users to access Survey Beacon Data managed by the Office of Surveyor General. This API provides functionality to interact with users, their documents, and surveyor-related information.</h4>
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
          <a href="https://github.com/RemoNode-Technologies-Inc/RemoWallet" className='btn'target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
