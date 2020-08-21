import React, { Component } from 'react'

import { ReactComponent as Plane } from '../../../Assets/Icons/plane.svg'

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
                     <input type="text" id="name" />
                     <label htmlFor="email">Email*</label>
                     <input type="email" id="email" />
                     <label htmlFor="phone">Phone*</label>
                     <input type="number" id="phone" />
                  </div>
                  <div className="Home__Contact__Form__TextArea">
                     <label htmlFor="messages">Messages</label>
                     <textarea cols="30" rows="14" name="messages" id="messages" />
                     <div>
                        <button>Send</button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}
