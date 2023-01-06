import React, { useState} from "react";
import "../styles/PageTitle.scss";

interface Props{
    alignRight?:boolean; 
    children: React.ReactNode;
}

const PageTitle = (props:Props) => {
  return (
    <div className={`pg-title ${props.alignRight?'align-right':''}`}>{props.children}</div>
  );
};

export default PageTitle;
