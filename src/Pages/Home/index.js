import React, { Component } from 'react'

import {
   Banner,
   Footer,
   Header,
   // OurProduct,
   OurWork,
   Partner,
   ReachUs,
   WhatWeDo
} from './Components/index'

export default class index extends Component {
   render() {
      return (
         <div className='Home'>
            <Header />
            <Banner />
            <Partner />
            <OurWork />
            <WhatWeDo />
            {/* <OurProduct /> */}
            <ReachUs />
            <Footer />
         </div>
      )
   }
}
