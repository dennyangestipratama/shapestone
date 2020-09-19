import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

import { ReactComponent as MobileBrowser } from '../../../Assets/Icons/mobile-browser.svg'
import Background from '../../../Assets/Backgrounds/work-background.png'

export default class OurWork extends Component {
   render() {
      return (
         <Slide bottom>
            <div id='OurWork' className='Home__Work'>
               <MobileBrowser />
               <div className="Home__Work--title">Some of our work</div>
               <div className="Home__Work__Wrapper">
                  <Fade right>
                     <div className="Home__Work__Wrapper__Cards">
                        <div className="Home__Work__Wrapper__Cards--title">Nearshore Engineering</div>
                        <div className="Home__Work__Wrapper__Cards--desc">Java, Front-end and QA engineering services to client in Los the Angeles Metropolitan Area.</div>
                     </div>
                  </Fade>
                  <Fade left>
                     <div className="Home__Work__Wrapper__Cards">
                        <div className="Home__Work__Wrapper__Cards--title">Onsite Engineering</div>
                        <div className="Home__Work__Wrapper__Cards--desc">Data Engineering services to client, in Burbank, California.</div>
                     </div>
                  </Fade>
               </div>
               <Jump>
                  <a href="#ReachUs">
                     <div className="Home__Work__Footer">
                        <button>Get in Touch</button>
                     </div>
                  </a>
               </Jump>
               <img src={Background} alt="background" className='Home__Work__Background' />
            </div>
         </Slide>
      )
   }
}
