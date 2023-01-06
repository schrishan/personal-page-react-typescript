import React, { useContext, useState } from "react";
import "../styles/Contact.scss";
import { PageTitle, TitleIntro } from ".";
import Lottie, { useLottie } from "lottie-react";
import animationData from '../assets/lottiefiles/contact-mail.json';
import { InView } from "react-intersection-observer";
import { SeletedPageContext } from "../context/activePage";

interface Props {
  children: React.ReactNode;
}
const list = [
  {
    name: "Sai Manoj Kumar Kommuru",
    img: "https://opterr.org/sadith/assets/images/manoj.png",
    role: "Full stack developer | CX Practitioner | AWS Solution Architect",
    comment:
      "Sadith worked as an UI specialist under me when I was working with British Telecommunications, UK. He is excellent to work with. He is highly motivated and a great team player. He understands the project needs deeply and delivers high quality deliverables on time. It is my pleasure to recommend Sadith. Looking forward to working with him again.",
  },
  {
    name: "Nayana Kantha Karunarathne",
    img: "https://opterr.org/sadith/assets/images/nayana.jpg",
    role: "Associate Tech Lead | Full Stack/Front end development",
    comment:
      "Sadith is one of the best among all people I have ever met and is a loyal colleague, who understands complex matters. Sadith is a strong and goal-oriented team player; with every problem there was a solution. He’s always willing to lend a hand to anyone who needs it. Watching him adapt to our ever-changing business landscape was an inspiration! His ability to overcome challenges with a smile made him stand out as a cut above the rest! Any company would be lucky to have Sadith on their payroll.",
  },
];

const Contact = () => {
  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);
  const seletedPageContext = useContext(SeletedPageContext); 
  return (
    <InView as="section" className="page-container" id="contact-me"  onChange={(inView, entry) => inView?seletedPageContext.setPage({name:'contact-me'}):null}>
      <PageTitle>
        Contact Me
      </PageTitle>
      <TitleIntro>
        Wanna discuss?
        <br />
        let's talk and keep in touch..!
      </TitleIntro>
      <div className="contact-content">
        <div className="animate-img">{View}</div>
        <div className="contact-list">
          <div className="contact-itm">
            <img src="https://opterr.org/sadith/assets/images/map.svg" />
            <span className="itm-txt">Marawila, Sri Lanka</span>
          </div>
          <div className="contact-itm">
            <img src="https://opterr.org/sadith/assets/images/call.svg" />
            <span className="itm-txt">+94774858799</span>
          </div>
          <div className="contact-itm">
            <img src="https://opterr.org/sadith/assets/images/mail.svg" />
            <a target="_blank" href="mailto:sadith@opterr.org">
              <span className="itm-txt">sadith@opterr.org</span>
            </a>
          </div>
          <div className="contact-itm">
            <img src="https://opterr.org/sadith/assets/images/linked.svg" />
            <a target="_blank" href="https://www.linkedin.com/in/sadithc/">
              <span className="itm-txt">Sadith Chrishantha</span>
            </a>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default Contact;
