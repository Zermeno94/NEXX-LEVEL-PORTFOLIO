import React from "react";
const Header = () => {
 return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>

               <li><a className="smoothscroll" href="#about">About</a></li>

             <li><a className="smoothscroll" href="#resume">Resume</a></li>

               <li><a className="smoothscroll" href="#portfolio">Works</a></li>

               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         {/* {/* <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Miranda Zermeno</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeInfo.role}.{resumeInfo.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeInfo.socialLinks && resumeInfo.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p> */}
                
                </header> 
      </React.Fragment>
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