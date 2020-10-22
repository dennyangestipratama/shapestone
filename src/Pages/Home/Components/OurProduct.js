import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ProductIMG from "../../../Assets/Images/product.png";
import Troumaka from "../../../Assets/Logos/troumaka.png";

import { ReactComponent as Puzzle } from "../../../Assets/Icons/puzzle-white.svg";
export default class OurProduct extends Component {
  render() {
    return (
      <div id="Product" className="Home__Product">
        <Puzzle />
        <div className="Home__Product--title">Our Products.</div>
        <div className="Home__Product__Content">
          <LazyLoadImage src={ProductIMG} alt="product" effect="opacity" />
          <div className="Home__Product__Content__Wrapper">
            <LazyLoadImage src={Troumaka} alt="troumaka" effect="opacity" />
            <div className="Home__Product__Content__Wrapper--title">
              Our Pride and Joy
            </div>
            <div className="Home__Product__Content__Wrapper--text">
              We’ve build from the ground up an asset management that is both
              simple and feature rich.
            </div>
            <div className="Home__Product__Content__Wrapper--info">
              Troumaka is being used in <br />
              <span>2,290 companies across the world.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
