import React, { Component } from "react";
import Swing from "react-reveal/Swing";
import Fade from "react-reveal/Fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ContractWork from "../../../Assets/Images/contract-work.png";
import Consulting from "../../../Assets/Images/consulting.png";
import ProjectWork from "../../../Assets/Images/project-work.png";

import { ReactComponent as Puzzle } from "../../../Assets/Icons/puzzle.svg";
import { ReactComponent as Briefcase } from "../../../Assets/Icons/briefcase.svg";
import { ReactComponent as Speech } from "../../../Assets/Icons/speech.svg";
import { ReactComponent as Doc } from "../../../Assets/Icons/doc.svg";
export default class WhatWeDo extends Component {
  render() {
    return (
      <div id="WhatWeDo" className="Home__Info">
        <Puzzle />
        <div className="Home__Info--title">What we do.</div>
        <div className="Home__Info__Content">
          <div className="Home__Info__Content__Map">
            <Fade left distance={"30px"} duration={1200}>
              <div className="Home__Info__Content__Map__Wrapper">
                <div className="Home__Info__Content__Map__Wrapper__Container">
                  <Briefcase />
                  <div className="Home__Info__Content__Map__Wrapper--title">
                    Contract Work.
                  </div>
                </div>
                <div className="Home__Info__Content__Map__Wrapper--desc">
                  Broad network of trusted engineers.
                </div>
              </div>
            </Fade>
            <Fade right distance={"30px"} duration={1200}>
              <LazyLoadImage
                effect="opacity"
                src={ContractWork}
                alt="Contract Work."
              />
            </Fade>
          </div>
          <div className="Home__Info__Content__Map">
            <Fade right distance={"30px"} duration={1200}>
              <div className="Home__Info__Content__Map__Wrapper">
                <div className="Home__Info__Content__Map__Wrapper__Container">
                  <Speech />
                  <div className="Home__Info__Content__Map__Wrapper--title">
                    Consulting.
                  </div>
                </div>
                <div className="Home__Info__Content__Map__Wrapper--desc">
                  Evaluate candidates, software architecture review, or other
                  area you need.
                </div>
              </div>
            </Fade>
            <Fade left distance={"30px"} duration={1200}>
              <LazyLoadImage
                effect="opacity"
                src={Consulting}
                alt="Consulting."
              />
            </Fade>
          </div>
          <div className="Home__Info__Content__Map">
            <Fade left distance={"30px"} duration={1200}>
              <div className="Home__Info__Content__Map__Wrapper">
                <div className="Home__Info__Content__Map__Wrapper__Container">
                  <Doc />
                  <div className="Home__Info__Content__Map__Wrapper--title">
                    Project Work.
                  </div>
                </div>
                <div className="Home__Info__Content__Map__Wrapper--desc">
                  Creating from the ground up, taking on existing project, or
                  even augment your existing team, we provide the best service.
                </div>
              </div>
            </Fade>
            <Fade right distance={"30px"} duration={1200}>
              <LazyLoadImage
                effect="opacity"
                src={ProjectWork}
                alt="Project Work."
              />
            </Fade>
          </div>
        </div>
        <Swing>
          <a href="#ReachUs">
            <div className="Home__Info__Footer">
              <button>Interested? Contact Us</button>
            </div>
          </a>
        </Swing>
      </div>
    );
  }
}
