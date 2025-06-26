import React from "react";

import Header from "@/components/Header";
import HomePage from "@/components/1_Home";
import About from "@/components/2_About";
import Projects from "@/components/4_Projects";

export default function Home(){
  return (
    <div>
      <Header/>
      <HomePage />
      <About />
      <Projects />
    </div>
  );
}