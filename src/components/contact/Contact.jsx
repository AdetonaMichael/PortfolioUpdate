import React, {useRef} from 'react'
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {MdMessage} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_n2wk71q', 'template_wq28uq8', form.current,'KscDpbUVQj1eqRK1W')
    .then(function(response) {
      alert('Your Message has been Delivered Successfully..!')
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      alert('For Some Reason Your Message is not sending... Contact Me on Linkedin')
       console.log('FAILED...', error);
    });
    e.target.reset();
  }


  return (
    <section id="contact">
         <h5>Get In Touch</h5>
         <h2 style={{color:'#fff'}}>Contact Me</h2>

         <div className='container contact__container'>
            <div className='contact__options'>
              <article className='contact__option'>
                <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>dummy2@gmail.com</h5>
                <a className='' href="mailto:dummy2@gmail.com">Send a Message</a>
              </article>
              <article className='contact__option'>
                <MdMessage className="contact__option-icon"/>
                <h4>Messanger</h4>
                <h5>Michael Adetona</h5>
                <a className='' href="mailto:dummy2@gmail.com">Send a Message</a>
              </article>
              <article className='contact__option'>
                <BsWhatsapp className="contact__option-icon"/>
                <h4>WhatsApp</h4>
                <h5>Mobile Number</h5>
                <a className='' href="https://api.whatsapp.com/send?phon+2347046820116">Send a Message</a>
              </article>
            </div>
            {/*  Contact form */}
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" id="name" name="name" placeholder='Your Full Name' required/>
              <input type="email" id="email" name ="email" placeholder='Your Email' required/>
              <textarea name="message" id="message" rows="7" placeholder='Your Message'></textarea>
              <div id="contact-btn">
              <button type="submit" className=' btn btn-primary'>Send Message</button>
              <a className="libutton" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=cyberlord" target="_blank">Follow on LinkedIn</a>
              </div>
            </form>
         </div>
    </section>
  )
}

export default Contact;