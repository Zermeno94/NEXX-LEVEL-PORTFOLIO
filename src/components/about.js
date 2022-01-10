import React from 'react';
import { Breadcrumb, Container,  Image } from 'react-bootstrap';


const About = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        
          <h2>Who am I?</h2>
          <ul>
            <li>I'm an American living and studying in Helsinki, Finland.</li>
            <li>
              Having lived in Finland for over five years, I consider sauna an
              essential part of life.
            </li>
            <li>
              I'm currently studying data science at Aalto University but have
              been learning web development for the past few years - enjoy the
              rapidly evolving and collaborative nature of the JavaScript
              community.
            </li>
            <li>
              When I'm not coding, you can find me playing Abba covers on the
              piano, popping endos on my mountain bike, or trying to learn the
              latest Finnish slang.
            </li>
          </ul>
          <Image src={require('../images/selfie.jpg')} />
        
      </Container>
      <Breadcrumb className='crumb'>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
        <Breadcrumb.Item active>Who Am I?</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}

export default About
//   render() {
//     const  resumeInfo = this.props.resumeInfo;
//     return (
//       <section id="about">
//          <div className="row">

//             <div className="three columns">

//                <img className="profile-selfie"  src="images/profileSelfie.jpg" alt="" />

//             </div>

//             <div className="nine columns main-col">

//                <h2>About Me</h2>
//                <p>
//                {
//                  resumeInfo.aboutme
//                }
//                </p>

//                <div className="row">

//                   <div className="columns contact-details">

//                   <h2>Contact Details</h2>
//                   <p className="address">
//        						<span>{resumeInfo.name}</span>
//                      <br></br>
//        						   <span>
//                      {resumeInfo.address}
//                     </span>
//                     <br></br>
//                     <span>{resumeInfo.website}</span>
//        					   </p>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </section>
//     );
//   }
// }