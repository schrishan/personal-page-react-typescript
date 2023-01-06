import React, { useState } from "react";
import "../styles/NavigationBar.scss";
import Lottie, { useLottie } from "lottie-react";
import animationData from '../assets/lottiefiles/scroll-down.json';
import { audioOnClick } from "../utility";
import {MainNav,CTALinks, NextPrevNav} from "../components";

const NavigationBar = () => {
  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);
  const [audioMute, setAudioMute] = useState(true);
  const toggleMute = () => {
    setAudioMute((audioMute) => !audioMute);
    audioMute ? document.body.classList.add('audio-muted'):document.body.classList.remove('audio-muted');
    audioOnClick();
  };
  return (
    <div className="nav-section">
      <MainNav/>
      <CTALinks/>
      <div className="click-sound click-audio-on" onClick={toggleMute}>
        <img
          src={`https://opterr.org/sadith/assets/images/sound_${
            audioMute ? "max" : "mute"
          }.svg`}
          alt="clicked sound"
        />
      </div>
      <div className="scroll-down">{View}
      </div>
      <NextPrevNav/>
    </div>
  );
};
export default NavigationBar;
