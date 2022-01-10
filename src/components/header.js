import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
 return (
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

   //  {/* <a class="anchor" id="home"></a>
   //  <div id="splash" class="container-fluid">
   //    <div class="row">
   //      <div class="col-lg-12 text-center">
   //        <br>
   //        <br> */}
   //        <h1>Miranda Zermeno</h1>
   //        <hr />
   //        <p>
   //          Full Stack Developer 
   //        </p>
   //        <p>
   //          <a href="https://github.com/Zermeno94" target="_blank"><i class="fa fa-github-square fa-2x"></i></a>
   //          <a href="https://www.linkedin.com/in/miranda-zermeno-58b30121a/" target="_blank"><i class="fa fa-linkedin-square fa-3x"></i></a>
   //          <a href="https://twitter.com/Mirandastaxx" target="_blank"><i class="fa fa-twitter-square fa-2x"></i></a>
   //        </p>
   //      {/* </div>
   //    </div>
   //    <div class = 'transition2'></div>
   //  </div> */}
   
    );
}

export  default  Header

// Per BCS Assist:
// const Header = () => { <React.Fragment></React.Fragment>} export default 


// import React, { Component } from 'react';
// export default class Header extends Component {
//   render() {
//     const resumeInfo = this.props.resumeInfo;
//     return (
//       <React.Fragment>
      
//       <header id="home">
//          <nav id="nav-wrap">
//             <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
//           <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
//             <ul id="nav" className="nav">
//                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>

//                <li><a className="smoothscroll" href="#about">About</a></li>

//              <li><a className="smoothscroll" href="#resume">Resume</a></li>

//                <li><a className="smoothscroll" href="#portfolio">Works</a></li>

//                <li><a className="smoothscroll" href="#contact">Contact</a></li>
//             </ul>
//          </nav>

//          <div className="row banner">
//             <div className="banner-text">
//                <h1 className="responsive-headline">I am {resumeInfo.name}.</h1>
//                <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeInfo.role}.{resumeInfo.roleDescription}
//                </h3>
//                <hr/>
//                <ul className="social">
//                   {
//                     resumeInfo.socialLinks && resumeInfo.socialLinks.map(item =>{
//                       return(
//                               <li key={item.name}>
//                                 <a href={item.url} target="_blank"><i className={item.className}></i></a>
//                               </li>
//                             )
//                           }
//                     )
//                   }
//                </ul>
//             </div>
//          </div>

//          <p className="scrolldown">
//             <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
//          </p>

//       </header>
//       </React.Fragment>
//     );
//   }
// }