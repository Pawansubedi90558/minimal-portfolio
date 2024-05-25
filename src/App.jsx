import React,{useEffect, useState} from "react";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import DownloadResume from "./components/DownloadResume";
import Image from "./components/Image";
import { BrowserRouter, Router } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="w-11/12 mx-auto bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter ">
        <div className="w-full mx-auto">
          <NavBar />
          <Intro />
          <Portfolio />
          <DownloadResume />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;
