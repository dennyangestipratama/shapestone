import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Shapestone from "../../../Assets/Logos/shapestone-logo-02.png";
import Linkedin from "../../../Assets/Logos/linkedin.png";
import Twitter from "../../../Assets/Logos/twitter.png";
import Email from "../../../Assets/Logos/email.png";

import { ReactComponent as Phone } from "../../../Assets/Icons/phone-white.svg";

export default class Footer extends Component {
  render() {
    return (
      <div id="Footer" className="Home__Footer">
        <LazyLoadImage src={Shapestone} alt="shapestone" effect="opacity" />
        <div className="Home__Footer__Link">
          <div className="Home__Footer__Link--title">Additional Links</div>
          <a href="/" target="_blank">
            Privacy Policy
          </a>
          <a href="/" target="_blank">
            Opt Out
          </a>
        </div>
        <div className="Home__Footer__Social">
          <div className="Home__Footer__Social--title">Reach Us</div>
          <div className="Home__Footer__Social__Media">
            <LazyLoadImage src={Linkedin} alt="linkedin" effect="opacity" />
            <LazyLoadImage src={Twitter} alt="twitter" effect="opacity" />
            <LazyLoadImage src={Email} alt="email" effect="opacity" />
          </div>
          <div className="Home__Footer__Social__Contact">
            <Phone />
            <div className="Home__Footer__Social__Contact--title">
              (424) 442-9535
            </div>
          </div>
        </div>
      </div>
    );
  }
}
