import React, { Component } from 'react'
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade';

import { ReactComponent as Plane } from '../../../Assets/Icons/plane.svg'
import { ReactComponent as Phone } from '../../../Assets/Icons/phone.svg'

export default class ReachUs extends Component {
   render() {
      return (
         <div id='ReachUs' className='Home__Contact'>
            <Plane />
            <div className="Home__Contact--title">Reach Us!</div>
            <div className="Home__Contact--desc">
               If you have any questions, let us know and we'll get back to you as
               soon as possible. We'd love to help and we look forward to the opportunity
               to work with you.
            </div>
            <form action="">
               <div className="Home__Contact__Form">
                  <Fade duration={1200}>
                     <div className="Home__Contact__Form__Input">
                        <label htmlFor="name">Name*</label>
                        <input type="text" id="name" />
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" />
                        <label htmlFor="phone">Phone*</label>
                        <input type="number" id="phone" />
                     </div>
                     <div className="Home__Contact__Form__TextArea">
                        <label htmlFor="messages">Messages</label>
                        <textarea cols="30" rows="14" name="messages" id="messages" />
                        <Swing >
                           <div>
                              <button>Send</button>
                           </div>
                        </Swing >
                     </div>
                  </Fade>
               </div>
               <div className="Home__Contact__Phone">
                  <div className="Home__Contact__Phone--border"></div>
                  <div className="Home__Contact__Phone--title">or you can call us directly at :</div>
                  <div className="Home__Contact__Phone__Wrapper">
                     <Phone />
                     <div className="Home__Contact__Phone__Wrapper--title">(424) 442-9535</div>
                  </div>
               </div>
            </form>
         </div >
      )
   }
}
