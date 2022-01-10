import React from "react";

// Components 
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import ResumeInfo from "./components/resumeInfo";
import Footer from "./components/footer";


import './App.css';

// import Navbar from "./components/navbar";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";

const App = ()  =>{
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
     
      <Header />
      <About />
      {/* <Portfolio /> 
      <Resume />
      <ResumeInfo/>
      <Contact />
      <Footer/> */}
    </main>
  );
}

export default App




// component layout 
//         ├── Header.js
//         ├── About.js
//         ├──Portfolio (This is where my work will be shown)
//         ├── Resume/Resume Info
//         ├── Contact.js
//         └── Footer.js