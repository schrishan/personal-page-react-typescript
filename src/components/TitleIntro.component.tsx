import React, { useState} from "react";
import "../styles/TitleIntro.scss";

interface Props{
    children: React.ReactNode;
}

const TitleIntro = (props:Props) => {
  return (
    <div className="title-intro">{props.children}</div>
  );
};

export default TitleIntro;
