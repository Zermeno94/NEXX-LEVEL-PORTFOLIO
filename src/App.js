import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

// Components 
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
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
      <Home/>
      <About />
      <Portfolio /> 
      <Resume />
      <Contact />
      {/* <Footer/> */}
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