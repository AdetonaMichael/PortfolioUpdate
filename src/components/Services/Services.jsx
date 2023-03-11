import React from 'react'
import './Services.css';
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id="services">
      <h5> What I offer</h5>
      <h2 style={{color:'#fff'}}> Services </h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web applicaton development: Design, develop and deploy web applications that are tailored to your specific business needs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API Development: Create robust APIs that can help your business communicate with other systems, devices or services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Design and Management: Design and manage databases that are efficient, scalable and secure.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Experience (UX): Create Intuitive and visually appealing user interfaces that improve user engagement and satisfaction</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Server Configuration and Management: Setup and manage servers, including deployment of software updates, security patches, and performance optimization.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintenance and Support: Provide Ongoing maintenance and support services to ensure that your web applications are up-to-date, secure and performing optimally.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Quality Assurance Testing: Perform testing and quality assurance activities to ensure that your web applications are functioning correctly.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>DevOps: Streamline your Development processs by integrating development and operations activities, including automated testing, continuous integrationa nd deployment.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Technical Consultancy: I offer technical consultancy service to help you evalute new technologies, assess the feasibility of new projects, and provide expert advice on technical issues</p>
            </li>
            
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Geographic Information System</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>GIS Application Development: Design, develop and deploy GIS applications that are tailored to your specific business needs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Geospatial Data Analysis: I will perform Geospatial data analysis on your geospatial datasets to identify patterns, trends and insights that can be used to make informed decisions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Geocoding: Convert Addresses or other location data into geographic coordinates that can be used in mapping and other applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Geospatial Database Design and Management: Design and manage geospatial databases that are efficient, scalable and secure</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Geospatial Web Services: Create Geospatial Web Services that can be used to access geospatial data from different devices and applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Geossptial Visualization: Create Visually appealing and interactive geospatial maps and other visualizations that help to communicate complex geospatial data.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mobile GIS Development: Design and Develope mobile applications that can be used to collect and manage geospatial data in field.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Geospatial Analytics: Perform Advance analytics on geospatial data to identify patterns and trends, and to support decision makin.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Technical Consultancy: I offer Technical consultancy services to help you to evalute new technologies, assess the feasibility of new projects, and provide expert advice on technical issues related to geospatial data and GIS applications</p>
            </li>
            
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>IT Support Specialist</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Hardware and Software Troubleshooting: Diagonose and troubleshoot issues related to hardware or software, and provide solutions to ensure that systems are functioning correctly.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Network Setup and Maintenance: Setup and maintain networks, including installing and configuring routers, switeches and other network components.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Backup and Recovery: Setup and manage data backup systems, and provide recovery services in the event of data loss or system failure.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Security Management: Provide security management services, including installing and maintaining antivirus software, setting up firewalls, and monitoring network activity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Help Desk Support: Provide Help desk support, including answering questions, troubleshooting issues, and providing technical assistance to users;</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Remote Support: Provide remote support services, including diagonosing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software Installation and Configuration: Install and configure software on users computers and ensure that it is working correctly.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>System Maintenance: Perform routine System maintenance tasks, such as software updates and sstem backups, to ensure that system are runing smoothly.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Technical Consultancy: I Offer technical consultancy services to help clients to evalute new technologies, assess the feasibility of new projects, and provide expert advice on technical issues realted to hardware, software and networks.</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}
