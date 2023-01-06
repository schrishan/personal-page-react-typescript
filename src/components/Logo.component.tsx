import React, {useContext} from "react";
import logo from "../assets/images/logo.svg";
import "../styles/Logo.scss";
import { SeletedPageContext } from "../context/activePage";

const Logo = () => {
    const seletedPageContext = useContext(SeletedPageContext); 
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    seletedPageContext.setPage({name:'home'});
  };
  window.addEventListener('scroll', () => {
    const element = document.getElementById("logo") as HTMLInputElement | null;
    if (window.scrollY > 1.5) {
      document.body.classList.add("fixed-top");
      element?.setAttribute("style", "opacity:1;");
    } else {
      element?.setAttribute("style", "opacity:0;");
      document.body.classList.remove("fixed-top");
    }
  });

  return (
    <div className="logo" onClick={scrollToTop}>
      <img src={logo} alt="logo" />
    </div>
  );
};
export default Logo;
