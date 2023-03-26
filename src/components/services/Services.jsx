import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> Responsive design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Security</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintenance and Support</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaboration</p>
            </li>


          </ul>
        </article>

        {/*END OF WEB DEVELOPMENT SERVICES AND START OF PENETRATION TESTING SERVICES */}

        <article className="service">
          <div className="service__head">
            <h3>Penetration Testing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Vulnerability Assessment</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Security testing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Services testing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Reporting</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Continuous Learning</p>
            </li>


          </ul>
        </article>

      {/*END OF PENETRATION TESTING SERVICES AND START OF SOFTWARE DEVELOPMENT SERVICES */}

        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Software Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Object-Oriented Programming</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Database integration</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Problem-solving</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaboration</p>
            </li>


          </ul>
        </article>

      {/*END OF CONTENT CREATION SERVICES */}

      </div>
    </section>
  )
}

export default Services