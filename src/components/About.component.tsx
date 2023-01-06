import React, { useContext, useState } from "react";
import "../styles/About.scss";
import { PageTitle, TitleIntro } from "../components";
import {handleMouseMove} from "../utility"
import { SeletedPageContext } from "../context/activePage";
import { InView } from "react-intersection-observer";
const About = () => {
  const seletedPageContext = useContext(SeletedPageContext); 
  return (
    <InView as="section" className="page-container" id="about-me"  onChange={(inView, entry) => inView?seletedPageContext.setPage({name:'about-me'}):null}>
      <PageTitle alignRight={true}>
        About
        <br />
        Me
      </PageTitle>
      <div className="content-wrp">
        <TitleIntro>Developing with passion for Problem Solving.</TitleIntro>
        <div className="about-me-content">
          <p className="para">
            Hello, it's me <b>Sadith Chrishantha.</b>
          </p>

          <p className="para" onMouseMove={handleMouseMove} >
            I am a front-end and web developer who constantly seeks out
            innovative solutions to everyday problems.
          </p>
          <p className="para" onMouseMove={handleMouseMove}>
            I've been a part of industry for over ten years and within those
            years, I've honed my design and development skills which makes
            working with a team easier. I've also had the opportunity to serve
            as lead front-end developer for different projects.
          </p>

          <p className="para"  onMouseMove={handleMouseMove}>  
            Furthermore I am a highly directed and result-oriented professional;
            a dedicated, proactive team player, a hardworking, well disciplined,
            and self-motivated individual who enjoys taking on new challenges
            and is willing to learn more while working individually as well as
            in a team environment.
          </p>

          <p className="para"  onMouseMove={handleMouseMove}>
            I'm still enthusiastically grabbing onto some other learnings I can
            integrate into the coding web in my head that support me to be a
            master in front-end & web development.
          </p>

          <p className="para" onMouseMove={handleMouseMove}>
            For whatever reason it is you are here, welcome...!
          </p>
        </div>
      </div>
    </InView>
  );
};

export default About;
