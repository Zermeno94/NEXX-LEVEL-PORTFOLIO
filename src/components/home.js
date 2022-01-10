import React from 'react'
import {  Breadcrumb, Container } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
import  '../style/style.css'

const Home = () => {
  return (
    <>
      <Container>
        <h2>Miranda Zermeno</h2>
          Full Stack Developer
        
        
        </Container>
        
      
      <Container className='container'>
        <SocialIcon
          url='https://www.linkedin.com/in/miranda-zermeno-58b30121a'
          target='_blank'
        />
        <SocialIcon url='https://github.com/Zermeno94' target='_blank' />
      </Container>

      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}

export default Home