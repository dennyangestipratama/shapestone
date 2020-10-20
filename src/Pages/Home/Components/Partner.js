import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

import Hulu from '../../../Assets/Logos/hulu.png'
import Vroozi from '../../../Assets/Logos/vroozi.png'
import Mark from '../../../Assets/Logos/mark.png'
import Riot from '../../../Assets/Logos/riot.png'
import Sag from '../../../Assets/Logos/sag.png'

export default class Partner extends Component {
   constructor(props) {
      super(props)

      this.state = {
         partners: [
            {
               id: 1,
               name: 'Hulu',
               image: Hulu
            },
            {
               id: 2,
               name: 'Vroozi',
               image: Vroozi
            },
            {
               id: 3,
               name: 'Mark',
               image: Mark
            },
            {
               id: 4,
               name: 'Riot',
               image: Riot
            },
            {
               id: 5,
               name: 'Sag',
               image: Sag
            },
         ]
      }
   }

   componentDidMount() {
   }


   render() {
      const { partners } = this.state
      return (
         <Fade bottom distance={'30px'} duration={1500}>
            <div id="Partner" className='Home__Partner'>
               {partners.map(partner => {
                  return (
                     <img src={partner.image} alt={partner.name} key={partner.id} />
                  )
               })}
            </div>
         </Fade>
      )
   }
}
