import React from "react";

import Header from "@/components/Header";
import HomePage from "@/components/1_Home";
import About from "@/components/2_About";
import Experience from "@/components/3_Experience";
import Projects from "@/components/4_Projects";
import Contact from "@/components/5_Contact";
import Footer from "@/components/Footer";


export default function Home(){
  return (
    <div>
      <Header/>
      <HomePage/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}