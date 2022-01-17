import React from 'react';
import { Container, Carousel, Image, NavLink } from 'react-bootstrap';

import '../style/style.css';
import Sectiontitle from './Sectiontitle';

const Portfolio = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <Sectiontitle title='Projects' />
        <Carousel>
          <Carousel.Item>
           
             <a href="https://github.com/MrTofuuu/GifCast" target="_blank" rel="noopener noreferrer"><Image src={require('../images/GifCast.gif')} 
             /></a>

            <Carousel.Caption>
              <h3>GifCast</h3>
              <p>This product allows you to search the weather forecast and it will display your current day + 4 day forecast for weather and the gif related according to the weather rating .</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={require('../images/Work Day Scheduler.png')} />

            <Carousel.Caption>
              <h3>Work Day Scheduler</h3>
              <p>Create a simple calendar application that allows a user to save events for each hour of the day.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={require('../images/E-Book Shop.png')} href='#https://github.com/mjs-esfsc/SMU-Project-2' />

            <Carousel.Caption>
              <h3>E-Book Shop</h3>
              <p>Off the Shelf is a web application where users can create an account and browse through numerous book genres. Users can selected a book to purchase or save it in their e-bookshelf history.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Portfolio