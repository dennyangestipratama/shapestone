import React, { Component } from "react";
import Lottie from "react-lottie";

import animationData from "../../../Assets/Animations/lottie.json";

export default class Animation extends Component {
   render() {
      const defaultOptions = {
         loop: true,
         autoplay: true,
         animationData: animationData,
         rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
         },
      };

      return (
         <div className="lottieAnimation">
            <Lottie options={defaultOptions} height={650} width={921} />
         </div>
      );
   }
}
