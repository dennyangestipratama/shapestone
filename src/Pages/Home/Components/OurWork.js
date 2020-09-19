import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';

import { ReactComponent as MobileBrowser } from '../../../Assets/Icons/mobile-browser.svg'
import Background from '../../../Assets/Backgrounds/work-background.png'

export default class OurWork extends Component {
   constructor(props) {
      super(props)

      this.state = {
         works: [
            {
               id: 1,
               title: 'Nearshore Engineering',
               desc: 'Java, Front-end and QA engineering services to client in Los the Angeles Metropolitan Area.'
            },
            {
               id: 2,
               title: 'Onsite Engineering',
               desc: 'Data Engineering services to client, in Burbank, California.'
            },
         ]
      }
   }

   render() {
      const { works } = this.state
      return (
         <Slide bottom>
            <div id='OurWork' className='Home__Work'>
               <MobileBrowser />
               <div className="Home__Work--title">Some of our work</div>
               <div className="Home__Work__Wrapper">
                  {works.map(work => {
                     return (
                        <div className="Home__Work__Wrapper__Cards" key={work.id}>
                           <div className="Home__Work__Wrapper__Cards--title">{work.title}</div>
                           <div className="Home__Work__Wrapper__Cards--desc">{work.desc}</div>
                        </div>
                     )
                  })}
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
