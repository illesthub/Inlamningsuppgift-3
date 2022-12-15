import React from 'react'
import PamelasPicks from "../assets/images/pamela-picks-image.png"
import LetsBeConscious from "../assets/images/lets-be-conscious.png"
import { NavLink } from 'react-router-dom'

const PamelaSection: React.FC = () => {
  return (
    <section className='pamela-section'>
        <div className='container-fluid'>
            <div className='pamelas-picks'>
              <img src={PamelasPicks} alt="Picture of Pamela" />
              <h1>Pamela Reif's <span>Top Picks</span></h1>
              <NavLink to={''} className='button btn-theme-dark'>                    
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    SHOP NOW
              </NavLink>
            </div>
            <div className='lets-be-conscious'>
              <img src={LetsBeConscious} alt="Picture of model"/>
              <h1>Let's Be <span>Conscious</span></h1>
              <NavLink to={''} className='button btn-theme-light'>                    
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    FLASH SALE
              </NavLink>
            </div>
        </div>
    </section>
  )
}

export default PamelaSection