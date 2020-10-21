import React, { Component } from 'react'
import Swal from 'sweetalert';
import emailjs from 'emailjs-com';
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade';

import { ReactComponent as Plane } from '../../../Assets/Icons/plane.svg'
import { ReactComponent as Phone } from '../../../Assets/Icons/phone.svg'

const SERVICE_ID = 'shapestone'
const TEMPLATE_ID = 'shapestone'
const USER_ID = 'user_ohD9f76IZsuQeEhINwH6u'


export default class ReachUs extends Component {
   constructor(props) {
      super(props)

      this.state = {
         name: '',
         email: '',
         phone: '',
         message: '',
         isSubmitting: false,
         isSuccess: false,
      }
   }

   inputName = (event) => {
      this.setState({ name: event.target.value })
   }

   inputEmail = (event) => {
      this.setState({ email: event.target.value })
   }

   inputPhone = (event) => {
      this.setState({ phone: event.target.value })
   }

   inputMessage = (event) => {
      this.setState({ message: event.target.value })
   }

   handleSubmit = (event) => {
      const { message, name, phone, email } = this.state
      event.preventDefault();
      this.setState({ isSubmitting: true }, () => {
         emailjs.send(SERVICE_ID, TEMPLATE_ID, { message, name, phone, email }, USER_ID).then(response => {
            this.setState({
               message: '',
               name: '',
               phone: '',
               email: '',
               isSubmitting: false,
               isSuccess: true
            }, () => Swal("Thank you!", "We have received your mail, we will response it ASAP!", "success"))
         }, err => {
            this.setState({
               message: '',
               name: '',
               phone: '',
               email: '',
               isSubmitting: false,
            }, () => Swal("Error", "Sorry there's an error, please kinda check it one more time", "error"))
         })
      })
   }


   render() {
      const { isSubmitting, isSuccess, name, email, message, phone } = this.state
      return (
         <div id='ReachUs' className='Home__Contact'>
            <Plane />
            <div className="Home__Contact--title">Reach Us!</div>
            <div className="Home__Contact--desc">
               If you have any questions, let us know and we'll get back to you as
               soon as possible. We'd love to help and we look forward to the opportunity
               to work with you.
            </div>
            <form onSubmit={this.handleSubmit}>
               <div className="Home__Contact__Form">
                  <Fade duration={1200}>
                     <div className="Home__Contact__Form__Input">
                        <label htmlFor="name">Name*</label>
                        <input
                           onChange={this.inputName}
                           value={name}
                           required
                           type="text"
                           id="name"
                        />
                        <label htmlFor="email">Email*</label>
                        <input
                           onChange={this.inputEmail}
                           required
                           value={email}
                           type="email"
                           id="email"
                        />
                        <label htmlFor="phone">Phone*</label>
                        <input
                           onChange={this.inputPhone}
                           required
                           value={phone}
                           type="number"
                           id="phone"
                        />
                     </div>
                     <div className="Home__Contact__Form__TextArea">
                        <label htmlFor="messages">Messages</label>
                        <textarea
                           cols="30"
                           rows="14"
                           name="messages"
                           id="messages"
                           required
                           value={message}
                           onChange={this.inputMessage}
                        />
                        <Swing >
                           <div>
                              <button
                                 className={`Home__Contact__Form__Button ${isSuccess ? 'Success' : ''}`}
                                 type='submit'
                                 disabled={isSuccess ? true : false}
                              >
                                 {isSubmitting ? 'Please Wait' : isSuccess ? 'Success' : 'Send'}
                              </button>
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
