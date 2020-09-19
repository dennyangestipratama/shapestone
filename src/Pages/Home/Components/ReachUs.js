import React, { Component } from 'react'
import HeadShake from 'react-reveal/HeadShake';
import Jello from 'react-reveal/Jello';

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
                  <div className="Home__Contact__Form__Input">
                     <label htmlFor="name">Name*</label>
                     <HeadShake>
                        <input type="text" id="name" />
                     </HeadShake>
                     <label htmlFor="email">Email*</label>
                     <HeadShake>
                        <input type="email" id="email" />
                     </HeadShake>
                     <label htmlFor="phone">Phone*</label>
                     <HeadShake>
                        <input type="number" id="phone" />
                     </HeadShake>
                  </div>
                  <div className="Home__Contact__Form__TextArea">
                     <label htmlFor="messages">Messages</label>
                     <HeadShake>
                        <textarea cols="30" rows="14" name="messages" id="messages" />
                     </HeadShake>
                     <Jello >
                        <div>
                           <button>Send</button>
                        </div>
                     </Jello >
                  </div>
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
         </div>
      )
   }
}
