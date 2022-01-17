import React from 'react';
import {  Container,Carousel ,Image} from 'react-bootstrap';

import '../style/style.css';
import Sectiontitle from './Sectiontitle';

const Portfolio = () => {
  return (
    <>
    <Container fluid='true' className='container'>
    <Sectiontitle title = 'Projects' />
    <Carousel>
  <Carousel.Item>
  <Image src={require('../images/GifCast.gif')} />
    <Carousel.Caption>
      <h3>GifCast</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src={require('../images/Work Day Scheduler.png')} />

    <Carousel.Caption>
      <h3>Work Day Scheduler</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src={require('../images/E-Book Shop.png')} />

    <Carousel.Caption>
      <h3>E-Book Shop</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
     </Carousel.Caption>
     </Carousel.Item>
     </Carousel>
      </Container>
    </>
  );
};

export default Portfolio