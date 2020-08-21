import React, { Component } from 'react'

import { Animation } from './index'
import Shapestone from '../../../Assets/Logos/shapestone-logo-01.png'
import Background from '../../../Assets/Backgrounds/banner-background.png'
import Detail_1 from '../../../Assets/Backgrounds/banner-background-detail-01.png'
import Detail_2 from '../../../Assets/Backgrounds/banner-background-detail-02.png'

export default class Banner extends Component {
   render() {
      return (
         <div id='Banner' className='Home__Banner'>
            <img src={Shapestone} alt="shapestone" className='Home__Banner__Logo' />
            <div className="Home__Banner--title">Shape Your Vision With Us</div>
            <Animation />
            <div className="Home__Banner--subtitle">
               <span className='--bold'>Shapestone</span> is a <span className='--navy'>technology consultant</span> and <span className='--navy'>software product company</span> based in Los Angeles
            </div>
            <div className="Home__Banner--desc">
               Talent and technology are the main difference between success and failure.
               At Shapestone we combine passionate and talented people with the right technology choice. This allows us to provide cost effective solutions to complex problems, and have a clear focus on project success.
            </div>
            <img src={Background} alt="background" className='Home__Banner__Background' />
            <img src={Detail_1} alt="background" className='Home__Banner__Background__Detail--left' />
            <img src={Detail_2} alt="background" className='Home__Banner__Background__Detail--right' />
         </div>
      )
   }
}
