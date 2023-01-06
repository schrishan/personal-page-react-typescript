import React, { useContext, useState } from "react";
import "../styles/Works.scss";
import {PageTitle,TitleIntro} from '.'
import { SeletedPageContext } from "../context/activePage";
import { InView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
}
const  list = [
  { site: "https://opterr.org/sadith/assets/images/site-1.png", url: "https://www.serenahotels.com/" },
  { site: "https://opterr.org/sadith/assets/images/site-2.png", url: "https://www.thistle.com/" },
  { site: "https://opterr.org/sadith/assets/images/site-3.png", url: "https://www.guoman.com/" },
  { site: "https://opterr.org/sadith/assets/images/site-4.png", url: "https://www.frasershospitality.com/en/" },
  { site: "https://opterr.org/sadith/assets/images/site-5.png", url: "#" },
  { site: "https://opterr.org/sadith/assets/images/site-6.png", url: "https://www.crownhotels.com.au/" },
  { site: "https://opterr.org/sadith/assets/images/site-7.png", url: "#" },
];

const Works = () => {
  const seletedPageContext = useContext(SeletedPageContext); 
  return (
    <InView as="section" className="page-container" id="works"  onChange={(inView, entry) => inView?seletedPageContext.setPage({name:'works'}):null}>
      <PageTitle>Works</PageTitle>
        <TitleIntro>
        Work that I’ve done.
        </TitleIntro>
        <div className="work-content">
          {list.map((obj: any, index: any) => (
            <div key={`itm-${index}`} className="site-itm">
            <a href={obj.url} target="_blank">
              <img src={obj.site} />
            </a>
            <span className="preloader-tube-tunnel"></span>
          </div>
          ))}
      </div>
    </InView>
  );
};

export default Works;

