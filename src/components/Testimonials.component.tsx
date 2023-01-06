import React, { useContext, useState } from "react";
import "../styles/Testimonials.scss";
import {PageTitle,TitleIntro} from '.'
import { handleMouseMove } from "../utility";
import { SeletedPageContext } from "../context/activePage";
import { InView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
}
const  list = [
  { name: "Sai Manoj Kumar Kommuru", img:"https://opterr.org/sadith/assets/images/manoj.png", role: "Full stack developer | CX Practitioner | AWS Solution Architect", comment:"Sadith worked as an UI specialist under me when I was working with British Telecommunications, UK. He is excellent to work with. He is highly motivated and a great team player. He understands the project needs deeply and delivers high quality deliverables on time. It is my pleasure to recommend Sadith. Looking forward to working with him again." },
  { name: "Nayana Kantha Karunarathne", img:"https://opterr.org/sadith/assets/images/nayana.jpg", role: "Associate Tech Lead | Full Stack/Front end development", comment:"Sadith is one of the best among all people I have ever met and is a loyal colleague, who understands complex matters. Sadith is a strong and goal-oriented team player; with every problem there was a solution. He’s always willing to lend a hand to anyone who needs it. Watching him adapt to our ever-changing business landscape was an inspiration! His ability to overcome challenges with a smile made him stand out as a cut above the rest! Any company would be lucky to have Sadith on their payroll." },
];

const Testimonials = () => {
  const seletedPageContext = useContext(SeletedPageContext); 
  return (
    <InView as="section" className="page-container" id="testimonials"  onChange={(inView, entry) => inView?seletedPageContext.setPage({name:'testimonials'}):null}>
      <PageTitle alignRight={true}>Testimonials</PageTitle>
        <TitleIntro>
        What people are saying about me.
        </TitleIntro>
        <div className="tst-content">
          {list.map((obj: any, index: any) => (
            <div key={`itm-${index}`} className={`tst-itm-wrp ${(index+1)/2 ==0 ? 'even':''}`}>
            <div className="tst-itm">
            <img src={obj.img} />
              <div className="tst-comment para">
                <svg
                  width="43"
                  height="33"
                  viewBox="0 0 43 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.25"
                    d="M41.2871 32.8926V30.4512C37.9342 29.2142 35.2975 27.2773 33.377 24.6406C31.4564 21.9714 30.4961 19.2044 30.4961 16.3398C30.4961 15.7214 30.5938 15.2656 30.7891 14.9727C30.8867 14.7773 31.0169 14.6797 31.1797 14.6797C31.3424 14.6797 31.6029 14.8099 31.9609 15.0703C33.0026 15.819 34.3047 16.1934 35.8672 16.1934C37.7552 16.1934 39.4154 15.4447 40.8477 13.9473C42.2474 12.4173 42.9473 10.6107 42.9473 8.52734C42.9473 6.3138 42.1335 4.39323 40.5059 2.76562C38.8783 1.10547 36.8763 0.275391 34.5 0.275391C31.7982 0.275391 29.4544 1.39844 27.4688 3.64453C25.4505 5.85807 24.4414 8.85286 24.4414 12.6289C24.4414 17.0234 25.7923 20.9622 28.4941 24.4453C31.196 27.9284 35.4603 30.7441 41.2871 32.8926ZM17.8008 32.8926V30.4512C14.4479 29.2142 11.8112 27.2773 9.89062 24.6406C7.97005 21.9714 7.00977 19.2044 7.00977 16.3398C7.00977 15.7214 7.10742 15.2656 7.30273 14.9727C7.40039 14.7773 7.5306 14.6797 7.69336 14.6797C7.85612 14.6797 8.11654 14.8099 8.47461 15.0703C9.51628 15.819 10.8184 16.1934 12.3809 16.1934C14.2689 16.1934 15.929 15.4447 17.3613 13.9473C18.7611 12.4173 19.4609 10.6107 19.4609 8.52734C19.4609 6.3138 18.6471 4.39323 17.0195 2.76562C15.3919 1.10547 13.39 0.275391 11.0137 0.275391C8.31185 0.275391 5.9681 1.39844 3.98242 3.64453C1.96419 5.85807 0.955078 8.85286 0.955078 12.6289C0.955078 17.0234 2.30599 20.9622 5.00781 24.4453C7.70964 27.9284 11.974 30.7441 17.8008 32.8926Z"
                    fill="#2F80ED"
                  />
                </svg>

                <p className="para" onMouseMove={handleMouseMove}>{obj.comment}
                </p>
                <div className="person-name">{obj.name}</div>
                <div className="person-role">{obj.role}</div>
              </div>
            </div>
          </div>
          ))}
      </div>
    </InView>
  );
};

export default Testimonials;

