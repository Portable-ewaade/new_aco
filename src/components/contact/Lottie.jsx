// eslint-disable-next-line
/* eslint-disable */
import React from "react";
import Lottie from "react-lottie";

import checkData from "./checkgreen.json";

const LottiePlayer = ({ lottieData, w, h, loop }) => {
  const defaultOptions = {
    loop: loop ? true : false,
    autoplay: true,
    animationData: lottieData ? lottieData : checkData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={h} width={w} />
    </div>
  );
};

export default LottiePlayer;
