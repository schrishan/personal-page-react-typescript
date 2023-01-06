import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles/App.scss";
import { SeletedPageContextProvider } from "./context/activePage";
import {
  About,
  Career,
  Contact,
  Home,
  Loader,
  Logo,
  NavigationBar,
  Skills,
  Testimonials,
  Works,
} from "./components";

function App() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 5000);

  return (
    <div className="App">
      {loader && <Loader />}
      <SeletedPageContextProvider>
        <NavigationBar />
        <Logo />
        <Home />
        <About />
        <Career />
        <Skills />
        <Works />
        <Testimonials />
        <Contact />
      </SeletedPageContextProvider>
      <div className="background-video-wrp">
        <video id="background-video" autoPlay loop muted>
          <source
            src="https:opterr.org/sadith/assets/videos/video-bg.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default App;
