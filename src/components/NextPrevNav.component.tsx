import React, { useContext, useEffect, useState } from "react";
import { SeletedPageContext } from "../context/activePage";
import "../styles/NextPrevNav.scss";
import { audioOnClick, scrollTo } from "../utility";

const list = [
  { icon: "home", link: "home", label: "Home" },
  { icon: "about", link: "about-me", label: "About Me" },
  { icon: "career", link: "career", label: "Career Experience" },
  { icon: "skills", link: "skills", label: "Skills" },
  { icon: "works", link: "works", label: "Works" },
  { icon: "chat-comment", link: "testimonials", label: "Testimonials" },
  { icon: "mail-white", link: "contact-me", label: "Contact Me" },
];

const NextPrevNav = () => {
  const seletedPageContext = useContext(SeletedPageContext);

  const PageNav = (link: string) => {
    seletedPageContext.setPage({name:link});
    audioOnClick();
    scrollTo(link);
  };

  return (
    <div className="next-prev-wrp">
      {seletedPageContext.page?.name !== "home" && (
        <div className="nav-btn prev-btn" onClick={() => PageNav(list[(list.findIndex((obj) => obj.link === seletedPageContext.page?.name)-1)]?.link)}>
          <svg
            width="22"
            height="30"
            viewBox="0 0 22 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_707_26)">
              <path
                d="M6.1875 10.0834C6.1875 9.80838 6.25625 9.62505 6.39375 9.44172L10.5187 3.94172C10.7937 3.57505 11.2062 3.57505 11.4812 3.94172L15.6063 9.44172C15.8813 9.80838 15.8813 10.3584 15.6063 10.7251C15.3313 11.0917 14.9188 11.0917 14.6438 10.7251L11 5.86672L7.35625 10.7251C7.08125 11.0917 6.66875 11.0917 6.39375 10.7251C6.25625 10.5417 6.1875 10.3584 6.1875 10.0834Z"
                fill="#2196F3"
              />
              <path
                d="M10.3125 24.7501L10.3125 4.58338C10.3125 4.03338 10.5875 3.66672 11 3.66672C11.4125 3.66672 11.6875 4.03338 11.6875 4.58338L11.6875 24.7501C11.6875 25.3001 11.4125 25.6667 11 25.6667C10.5875 25.6667 10.3125 25.3001 10.3125 24.7501Z"
                fill="#2196F3"
              />
            </g>
            <defs>
              <clipPath id="clip0_707_26">
                <rect
                  width="29.3333"
                  height="22"
                  fill="white"
                  transform="translate(22 6.10352e-05) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="nav-label">{list[(list.findIndex((obj) => obj.link === seletedPageContext.page?.name)-1)]?.label}</span>
        </div>
      )}
      {seletedPageContext.page?.name !== "contact-me" && (
        <div className="nav-btn next-btn" onClick={() => PageNav(list[(list.findIndex((obj) => obj.link === seletedPageContext.page?.name)+1)]?.link)}>
          <svg
            width="22"
            height="30"
            viewBox="0 0 22 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_84_90)">
              <path
                d="M15.8125 19.25C15.8125 19.525 15.7438 19.7083 15.6063 19.8917L11.4813 25.3917C11.2063 25.7583 10.7938 25.7583 10.5188 25.3917L6.39375 19.8917C6.11875 19.525 6.11875 18.975 6.39375 18.6083C6.66875 18.2417 7.08125 18.2417 7.35625 18.6083L11 23.4667L14.6437 18.6083C14.9187 18.2417 15.3313 18.2417 15.6063 18.6083C15.7438 18.7917 15.8125 18.975 15.8125 19.25Z"
                fill="#2196F3"
              />
              <path
                d="M11.6875 4.58332L11.6875 24.75C11.6875 25.3 11.4125 25.6667 11 25.6667C10.5875 25.6667 10.3125 25.3 10.3125 24.75L10.3125 4.58332C10.3125 4.03332 10.5875 3.66665 11 3.66665C11.4125 3.66665 11.6875 4.03332 11.6875 4.58332Z"
                fill="#2196F3"
              />
            </g>
            <defs>
              <clipPath id="clip0_84_90">
                <rect
                  width="29.3333"
                  height="22"
                  fill="white"
                  transform="translate(0 29.3333) rotate(-90)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="nav-label">{list[list.findIndex((obj) => obj.link === seletedPageContext.page?.name)+1]?.label}</span>
        </div>
      )}
    </div>
  );
};

export default NextPrevNav;
