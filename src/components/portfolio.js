import React from 'react';
import {  Carousel } from 'react-bootstrap';

import '../style/style.css';

const Portfolio = () => {
  return (
    <>
    <h3>Projects</h3>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='../images/GifCast.gif'
      alt="GifCast"
    />
    <Carousel.Caption>
      <h3>GifCast</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/WorkDayScheduler.png"
      alt="Work Day Scheduler"
    />

    <Carousel.Caption>
      <h3>Work Day Scheduler</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/E-Book Shop.png"
      alt="E-Book Shop"
    />

    <Carousel.Caption>
      <h3>E-Book Shop</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  );
};

export default Portfolio