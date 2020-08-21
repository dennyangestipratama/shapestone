import React, { Component } from 'react'

import ProductIMG from '../../../Assets/Images/product.png'
import Troumaka from '../../../Assets/Logos/troumaka.png'

import { ReactComponent as Puzzle } from '../../../Assets/Icons/puzzle-white.svg'
export default class OurProduct extends Component {
   render() {
      return (
         <div id='Product' className='Home__Product'>
            <Puzzle />
            <div className="Home__Product--title">Our Products.</div>
            <div className="Home__Product__Content">
               <img src={ProductIMG} alt="product" />
               <div className="Home__Product__Content__Wrapper">
                  <img src={Troumaka} alt="troumaka" />
                  <div className="Home__Product__Content__Wrapper--title">Our Pride and Joy</div>
                  <div className="Home__Product__Content__Wrapper--text">
                     We’ve build from the ground up an asset management
                     that is both simple and feature rich.
                  </div>
                  <div className="Home__Product__Content__Wrapper--info">
                     Troumaka is being used in <br />
                     <span>2,290 companies across the world.</span>
                  </div>

               </div>
            </div>
         </div>
      )
   }
}
