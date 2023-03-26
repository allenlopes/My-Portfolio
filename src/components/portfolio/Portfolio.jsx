import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Port1.png'
import IMG2 from '../../assets/Port2.png'
import IMG3 from '../../assets/Port3.png'
import IMG4 from '../../assets/Port4.png'
import MEDIA from '../../assets/Media.mp4'


const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">


          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>NFT Marketplace</h3>
            <h5>Enabling creators to monetize their digital assets,
              Providing a platform for buying and listing NFTs in a secure and decentralized manner
              through transparent record of ownership and transaction history.</h5>
            <h4>Stack</h4>
            <h5 className=""><strong><span style={{color: "powderblue"}}><i> #React  #Solidty  #Smart Conracts  #Blockchain #Metamask </i></span></strong></h5>
            <div className="portfolio__item-cta">
              <a href="https://github.com/allenlopes" className='btn' target='_blank' rel="noreferrer">Github</a>                          {/* With target='_blank', we have to use, rel="noreferrer" since if we don't use it is a security risk in older browsers*/}
              <a href="#" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>


          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
            </div>
            <h3>Gym Equipment's Website</h3>
            <h5>Providing a user-friendly platform, offering wide variety of gym equipment,
              providing detailed product information, ensuring the security of customer data,
              the need for good quality gym equipment's at home.</h5>
            <h4>Stack</h4>
            <h5 className=""><strong><span style={{color: "powderblue"}}><i> #HTML  #CSS  #JavaScript  #PHP</i></span></strong></h5>
            <div className="portfolio__item-cta">
              <a href="https://github.com/allenlopes" className='btn' target='_blank' rel="noreferrer">Github</a>                            {/* With target='_blank', we have to use, rel="noreferrer" since if we don't use it is a security risk in older browsers*/}
              <a href="#" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>


          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
            </div>
            <h3>Inventory Process System</h3>
            <h5>Keeps track of items received, items sold, and current inventory levels,
              as well as the ability to control user access, permissions within the
              organization.</h5>
            <h4>Stack</h4>
            <h5 className=""><strong><span style={{color: "powderblue"}}><i> #HTML  #CSS  #JavaScript  #Bootstrap  #PHP</i></span></strong></h5>
            <div className="portfolio__item-cta">
              <a href="https://github.com/allenlopes" className='btn' target='_blank' rel="noreferrer">Github</a>                            {/* With target='_blank', we have to use, rel="noreferrer" since if we don't use it is a security risk in older browsers*/}
              <a href="#" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>


          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG4} alt="" />
            </div>
            <h3>Weather Forecasting Application</h3>
            <h5>Application displays the current temperature, humidity, wind speed,
              and other current weather conditions in a user-specified location.</h5>
            <h4>Stack</h4>
            <h5 className=""><strong><span style={{color: "powderblue"}}><i> #Java #Weather API</i></span></strong></h5>
            <div className="portfolio__item-cta">
              <a href="https://github.com/allenlopes" className='btn' target='_blank' rel="noreferrer">Github</a>                           {/* With target='_blank', we have to use, rel="noreferrer" since if we don't use it is a security risk in older browsers*/}
              <a href={MEDIA} className='btn btn-primary' target='_blank' rel="noreferrer">Video Demo</a>
            </div>
          </article>


        </div>
    </section>
  )
}

export default Portfolio