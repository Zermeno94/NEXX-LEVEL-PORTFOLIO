import React from 'react';
import { Breadcrumb, Container,  Image} from 'react-bootstrap';
import  '../style/style.css'


const About = () => {
  return (
    <>
  
      <Container fluid='true' className='container'>
        
          <h1>About me</h1>
          <Image src={require('../images/selfie.jpg')} />
          <ul>
            <li> I enjoy creating thinks that live on the internet. My interest  in design started back in 2016 when I decided to started my pursuit of Architecture. Turns out creating designs online taught me a lot of how impactful web design can be.</li>
            <li>
            Fast-forward to today, I’ve managed to start my new career path in web development. I’m a Dallas as based freelance. My style is rather minimalistic with a strong focus to detail.
            </li>
           
          </ul>
         
        
      </Container>
      
    </>
  )
}

export default About
