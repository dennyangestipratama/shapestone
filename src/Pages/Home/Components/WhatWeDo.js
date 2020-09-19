import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';

import ContractWork from '../../../Assets/Images/contract-work.png'
import Consulting from '../../../Assets/Images/consulting.png'
import ProjectWork from '../../../Assets/Images/project-work.png'

import { ReactComponent as Puzzle } from '../../../Assets/Icons/puzzle.svg'
import { ReactComponent as Briefcase } from '../../../Assets/Icons/briefcase.svg'
import { ReactComponent as Speech } from '../../../Assets/Icons/speech.svg'
import { ReactComponent as Doc } from '../../../Assets/Icons/doc.svg'
export default class WhatWeDo extends Component {
   render() {
      return (
         <div id='WhatWeDo' className='Home__Info'>
            <Puzzle />
            <div className="Home__Info--title">What we do.</div>
            <div className="Home__Info__Content">
               <Slide left cascade>
                  <div className="Home__Info__Content__Map">
                     <div className="Home__Info__Content__Map__Wrapper">
                        <div className='Home__Info__Content__Map__Wrapper__Container'>
                           <Briefcase />
                           <div className="Home__Info__Content__Map__Wrapper--title">Contract Work.</div>
                        </div>
                        <div className="Home__Info__Content__Map__Wrapper--desc">Broad network of trusted engineers.</div>
                     </div>
                     <img src={ContractWork} alt='Contract Work.' />
                  </div>
               </Slide>
               <Slide right cascade>
                  <div className="Home__Info__Content__Map">
                     <div className="Home__Info__Content__Map__Wrapper">
                        <div className='Home__Info__Content__Map__Wrapper__Container'>
                           <Speech />
                           <div className="Home__Info__Content__Map__Wrapper--title">Consulting.</div>
                        </div>
                        <div className="Home__Info__Content__Map__Wrapper--desc">Evaluate candidates, software architecture review, or other area you need.</div>
                     </div>
                     <img src={Consulting} alt='Consulting.' />
                  </div>
               </Slide>
               <Slide top>
                  <div className="Home__Info__Content__Map">
                     <div className="Home__Info__Content__Map__Wrapper">
                        <div className='Home__Info__Content__Map__Wrapper__Container'>
                           <Doc />
                           <div className="Home__Info__Content__Map__Wrapper--title">Project Work.</div>
                        </div>
                        <div className="Home__Info__Content__Map__Wrapper--desc">Creating from the ground up, taking on existing project, or even augment your existing team, we provide the best service.</div>
                     </div>
                     <img src={ProjectWork} alt='Project Work.' />
                  </div>
               </Slide>
            </div>
            <Jump>
               <a href="#ReachUs">
                  <div className="Home__Info__Footer">
                     <button>Interested? Contact Us</button>
                  </div>
               </a>
            </Jump>
         </div>
      )
   }
}
