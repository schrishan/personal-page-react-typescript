import React from "react";
import '../styles/CTALinks.scss';

const list = [
    { icon: "https://opterr.org/sadith/assets/images/linkedin.svg", link: "https://www.linkedin.com/in/sadithc", target:"_blnk"},
    { icon: "https://opterr.org/sadith/assets/images/git.svg", link: "https://github.com/schrishan", target:"_blnk" },
    { icon: "https://opterr.org/sadith/assets/images/email.svg", link: "mailto:sadith@opterr.org", target:"_blnk" },
    { icon: "https://opterr.org/sadith/assets/images/resume.svg", link: "#", target:"_blnk" }
  ];

const CTALinks = () => {
    return(
        <div className="contact-nav-list">
            {list.map((itm: any, index: any) => (
                <div key={`itm-${index}`} className="link-btn">
                    <a className="preloader" href={itm.link} target={itm.target}>
                    <img src={itm.icon} alt="icon" />
                    </a>
              </div>
            ))}
      </div>
    )
}

export default CTALinks;