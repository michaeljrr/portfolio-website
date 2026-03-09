import React from "react";

import Header from "@/components/Header";
import HomePage from "@/components/1_Home";
import About from "@/components/2_About";
import Certifications from "@/components/3_Certifications";
import Experience from "@/components/4_Experience";
import Projects from "@/components/5_Projects";
import Contact from "@/components/6_Contact";
import Footer from "@/components/Footer";


export default function Home(){
  return (
    <div>
      <Header/>
      <HomePage/>
      <About/>
      <Certifications/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}