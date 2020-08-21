import React, { Component } from 'react'

import { ReactComponent as Phone } from '../../../Assets/Icons/phone.svg'
export default class Header extends Component {
   render() {
      return (
         <div id='Header' className="Home__Header">
            <div className="Home__Header__Wrapper">
               <Phone />
               <div className="Home__Header__Wrapper--text">(424) 442-9535</div>
            </div>
            <a href="#ReachUs">
               <div className="Home__Header__Button">
                  <button>Contact Us</button>
               </div>
            </a>
         </div>
      )
   }
}
