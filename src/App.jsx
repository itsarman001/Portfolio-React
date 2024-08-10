import React from "react";
import {Hero, Navbar, Projects, Bio, Education, Skills} from "./components";

function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Bio />
        <Education />
      </div>
    </div>
  );
}

export default App;
