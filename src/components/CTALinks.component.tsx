import React from "react";
import '../styles/CTALinks.scss';

const list = [
    { icon: "https://opterr.org/sadith/assets/images/linkedin.svg", link: "https://www.linkedin.com/in/sadithc", target:"_blnk", title:"LinkedIn"},
    { icon: "https://opterr.org/sadith/assets/images/git.svg", link: "https://github.com/schrishan", target:"_blnk", title:"Github" },
    { icon: "https://opterr.org/sadith/assets/images/email.svg", link: "mailto:sadith@opterr.org", target:"_blnk", title:"Email" },
    { icon: "https://opterr.org/sadith/assets/images/resume.svg", link: "https://opterr.org/sadith/assets/Sadith-Chrishantha.pdf", target:"_blnk", title:"Resume" }
  ];

const CTALinks = () => {
    return(
        <div className="contact-nav-list">
            {list.map((itm: any, index: any) => (
                <div key={`itm-${index}`} className="link-btn">
                    <a className="preloader" href={itm.link} target={itm.target} title={itm.title}>
                    <img src={itm.icon} alt="icon" />
                    </a>
              </div>
            ))}
      </div>
    )
}

export default CTALinks;