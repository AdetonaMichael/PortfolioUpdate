import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
        <h5>What Skills I have</h5> 
        <h2 style={{color:'#fff'}}>My Experience</h2>

        <div className='container experience__container'>
            <div >
            <h3>Techology & Framework</h3>
            <div className='experience__GIS'>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>PHP</h4>
                     <small className=''></small>
                   </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>Laravel</h4>
                     <small className=''></small>
                   </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>Python</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>JavaScript</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>CSS </h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>Tailwind CSS</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>Bootstrap</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>React</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>NextJS</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>React Native</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>AWS</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>Git</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>Google Cloud</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>Bitbucket</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>YouTrack</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>Trello</h4>
                     <small className=''></small>
            </article>
            </div>
            </div>
            <div >
            <h3>Geographic Information System</h3>
            <div className='experience__GIS'>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>Spatial Analysis</h4>
                     <small className=''></small>
                   </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>Custom Maps</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>WebGIS</h4>
                     <small className=''></small>
            </article>
            <article className='experience__details'>
                     <BsPatchCheckFill/>
                     <h4>GIS Mobile</h4>
                     <small className=''></small>
            </article>
            </div>
            </div>
       
        </div>
    </section>
  );
}

export default Experience;
