import React, { Component } from 'react'

import ContractWork from '../../../Assets/Images/contract-work.png'
import Consulting from '../../../Assets/Images/consulting.png'
import ProjectWork from '../../../Assets/Images/project-work.png'

import { ReactComponent as Puzzle } from '../../../Assets/Icons/puzzle.svg'
import { ReactComponent as Briefcase } from '../../../Assets/Icons/briefcase.svg'
import { ReactComponent as Speech } from '../../../Assets/Icons/speech.svg'
import { ReactComponent as Doc } from '../../../Assets/Icons/doc.svg'
export default class WhatWeDo extends Component {
   constructor(props) {
      super(props)

      this.state = {
         infos: [
            {
               id: 1,
               title: 'Contract Work.',
               desc: 'Broad network of trusted engineers.',
               image: ContractWork,
               svg: <Briefcase />
            },
            {
               id: 2,
               title: 'Consulting.',
               desc: 'Evaluate candidates, software architecture review, or other area you need.',
               image: Consulting,
               svg: <Speech />
            },
            {
               id: 3,
               title: 'Project Work.',
               desc: 'Creating from the ground up, taking on existing project, or even augment your existing team, we provide the best service.',
               image: ProjectWork,
               svg: <Doc />
            },
         ]
      }
   }

   render() {
      const { infos } = this.state
      return (
         <div id='WhatWeDo' className='Home__Info'>
            <Puzzle />
            <div className="Home__Info--title">What we do.</div>
            <div className="Home__Info__Content">
               {infos.map(info => {
                  return (
                     <div className="Home__Info__Content__Map" key={info.id}>
                        <div className="Home__Info__Content__Map__Wrapper">
                           <div className='Home__Info__Content__Map__Wrapper__Container'>
                              {info.svg}
                              <div className="Home__Info__Content__Map__Wrapper--title">{info.title}</div>
                           </div>
                           <div className="Home__Info__Content__Map__Wrapper--desc">{info.desc}</div>
                        </div>
                        <img src={info.image} alt={info.title} />
                     </div>
                  )
               })}
            </div>
            <a href="#ReachUs">
               <div className="Home__Info__Footer">
                  <button>Interested? Contact Us</button>
               </div>
            </a>
         </div>
      )
   }
}
