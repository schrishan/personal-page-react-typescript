import React, { useContext, useState} from "react";
import "../styles/Career.scss";
import {PageTitle,TitleIntro} from '../components'
import {handleMouseMove} from "../utility"
import { InView } from "react-intersection-observer";
import { SeletedPageContext } from "../context/activePage";

interface Props{
    children: React.ReactNode;
}
const experience = [
  {
    title: "Senior consultant",
    dateLoction: "[ Since  21/08/2021 ] - Virtusa",
    responsibilites:
      "Lead front-end team to achieve business objectives.  Work directly with the client to define and clarify requirements. Ensure customer service is provided in a timely fashion. Design and develop fully functional user interfaces that align with business objectives by using React, Typescript, Angular, Graphql, Node js, Next js , HTML/CSS, SCSS and integrate REST APIs. In additional take a part of requirement analysis, estimation, and delivery planning. Scheduling training sessions according to requirement of team members.",
  },
  {
    title: "Consultant",
    dateLoction: "[ 28/01/2019 – 20/08/2021 ] - Virtusa",
    responsibilites:
      "Develop User Interfaces using Angular, Typescript, React, JavaScript, HTML/CSS and SCSS. Build reusable code and libraries for future use. Ensure the technical feasibility of UI/UX designs. Optimize application for maximum speed and scalability. Assure that all user input is validated before submitting to back-end. Collaborate with other team members and stakeholders.",
  },
  {
    title: "Senior web developer",
    dateLoction: "[ 01/01/2015 – 11/02/2019 ] - eBEYONDS",
    responsibilites:
      "Interpreting client specifications, and identifying website user requirements. Creating time frames and work schedules to meet deadlines. Communicating effectively with clients and teams. Supervising junior web developers, analyzing areas of weakness, and scheduling training sessions accordingly. Design and develop a fully functional web site that align with business objectives by using HTML, CSS, JavaScript, jQuery, mySQL and PHP.",
  },
  {
    title: "Web developer",
    dateLoction: "[ 28/01/2013 – 31/12/2014 ] - eBEYONDS",
    responsibilites:
      "Developing fully functional we site using HTML, CSS, JavaScript, jQuery and PHP. Producing, maintaining and modifying websites and user interfaces. Ensuring websites are accessible across all the platforms. Routinely testing websites for ease of use, speed, and other quality factors. Fixing any website issues or bugs that arise. Help and support to team members to deliver quality product that aligns with business objectives.",
  },
];

const Career = () => {
  const seletedPageContext = useContext(SeletedPageContext); 
  return (
    <InView as="section" className="page-container" id="career"  onChange={(inView, entry) => inView?seletedPageContext.setPage({name:'career'}):null}>
      <PageTitle>
        Carrer
      </PageTitle>
      <div className="content-wrp">
        <TitleIntro>Companies I have worked for in the past.</TitleIntro>
        <div className="career-content">    
          {experience.map((obj: any, index: any) =>
            <div key={`itm-${index}`} className="exp-itm-wrp">
              <div className="exp-itm para">
                <h3 className="exp-itm-title">{obj.title}</h3>
                <span className="exp-itm-date-location">{obj.dateLoction}</span>
                <p className="exp-itm-responsibilities para" onMouseMove={handleMouseMove}>{obj.responsibilites}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </InView>
  );
};

export default Career;
