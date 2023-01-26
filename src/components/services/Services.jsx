import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Design thinking.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Wireframing & UI design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Prototyping & testing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Developer handoff.</p>
            </li>
            {/* <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li> */}
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web Developer.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>WordPress Developer.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Frontend & Backend Web developer.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Unique, clear, comprehensive & reproducible identity design .</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>When you are not there, your website should do your work</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Every brand is experienced differently and every product must be sold uniquely. </p>
            </li>
             {/* <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li> */}
          </ul> 
        </article>
        {/* End of WebDevelopment */}
        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
          <li>
              <BiCheck className='service_list-icon'/>
              <p>Design thinking.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Wireframing & UI design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Prototyping & testing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Unique, clear, comprehensive & reproducible identity design .</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>When you are not there, your website should do your work</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services