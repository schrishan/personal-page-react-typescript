import React, { useContext, useState } from "react";
import "../styles/Home.scss";
import Sadith from "../assets/images/home-img.png";
import { handleMouseMove } from "../utility";
import { InView } from "react-intersection-observer";
import { SeletedPageContext } from "../context/activePage";

const Home = () => {
  const homeTitle = `<Sadith/>`;
  const [fadeValue, setFadeValue] = useState(0);
  // setInterval(() => {
  //   fadeValue === 3 ? setFadeValue(1) : setFadeValue(fadeValue + 1);
  // }, 3000);
  const seletedPageContext = useContext(SeletedPageContext);
  return (
    <InView
      as="section"
      className="page-container"
      id="home"
      onChange={(inView, entry) =>
        inView ? seletedPageContext.setPage({ name: "home" }) : null
      }
    >
      <div className="my-intro">
        <h1 className="intro-title">
          Hi, I’m
          <span className="my-name"> {homeTitle}</span>
        </h1>
        <div className="my-pos">
          <div className="pos-title-wrp">
          <div
            className="pos-title-1 pos-title"
          >
            Frontend Developer
          </div>
          <div
            className="pos-title-2 pos-title"
          >
            Full Stack Web Developer
          </div>
          <div
            className="pos-title-3 pos-title"
          >
            UI Specialist
          </div>
          </div>
        </div>
        <div className="my-memo para" onMouseMove={handleMouseMove}>
          “ Productivity is never an accident. It is always a result of a
          commitment to excellence, intelligent planning and focused effort. “
        </div>
        <div className="img-wrp">
          <img src={Sadith} alt="Sadith Crishantha" />
        </div>
      </div>
    </InView>
  );
};

export default Home;
